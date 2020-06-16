// REACT NATIVE
import React, { Component } from 'react';
import { Alert, ActivityIndicator, StatusBar } from 'react-native';

// LIBS
import { FlatList } from 'react-native-gesture-handler';
import { connect, ConnectedProps } from 'react-redux';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';

// COMPONENTS
import { Button, HeaderButton, PostItem, Tabs } from '../../components';

// RESOURCES
import { CustomPost } from '../../types';
import {
  getPosts,
  setSelectedPost,
  deleteAll,
  deletePostByPosition,
  clearComments,
} from '../../actions';
import { RootState } from '../../store/configureStore';

// STYLES & UTILS
import { Container, LoadingContainer, MainContainer, NativeStyles, NoDataText } from './styles';
import { theme } from '../../utils/theme';

const mapStateToProps = ({ comments, posts }: RootState) => ({
  comments: comments.comments,
  favorites: posts.favorites,
  loadingPosts: posts.loadingPosts,
  posts: posts.posts,
  postsError: posts.postsError,
});

const mapDispatchToProps = {
  getPostsConnected: () => getPosts(),
  setSelectedPostConnected: (post: CustomPost) => setSelectedPost(post),
  deleteAllConnected: () => deleteAll(),
  deletePostByPositionConnected: (position: number, id: number) =>
    deletePostByPosition(position, id),
  clearCommentsConnected: () => clearComments(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PostsNavigationProps = StackNavigationProp<RootStackParamList, 'Posts'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  navigation: PostsNavigationProps;
};

type State = {
  loading: boolean;
  tabIndex: number;
};

class Posts extends Component<Props, State> {
  state = {
    loading: false,
    tabIndex: 0,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => <HeaderButton iconNameOn="md-refresh" onButtonPress={this.getPosts} />,
    });
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const { getPostsConnected } = this.props;
      await getPostsConnected();
    } catch (err) {
      console.log(err);
    }
  };

  deleteAll = () => {
    const { deleteAllConnected } = this.props;
    Alert.alert('Confirmation', 'Are you sure you want to delete all the posts?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => deleteAllConnected(),
      },
    ]);
  };

  deletePost = (position: number, id: number) => {
    const { deletePostByPositionConnected, favorites, posts } = this.props;
    const { tabIndex } = this.state;
    Alert.alert('Confirmation', 'Are you sure you want to delete this posts?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          if (tabIndex === 0) {
            const positionInFavorites = favorites.findIndex((item) => item.id === id);
            deletePostByPositionConnected(position, positionInFavorites);
          } else {
            const indexToDelete = posts.findIndex((item) => item.id === id);
            deletePostByPositionConnected(indexToDelete, position);
          }
        },
      },
    ]);
  };

  goToDetails = async (post: CustomPost, index: number) => {
    try {
      const { clearCommentsConnected, comments, navigation, setSelectedPostConnected } = this.props;
      if (comments.length > 0) {
        clearCommentsConnected();
      }
      await setSelectedPostConnected(post);
      navigation.navigate('Details', { position: index });
    } catch (err) {
      console.log(err);
    }
  };

  renderTabContent = () => {
    const { tabIndex } = this.state;
    const { favorites, loadingPosts, posts, postsError } = this.props;

    if (loadingPosts) {
      return (
        <LoadingContainer>
          <ActivityIndicator color={theme.green} size="large" />
        </LoadingContainer>
      );
    }

    if (postsError) {
      return (
        <NoDataText>There was a problem requesting the data, please try again later.</NoDataText>
      );
    }

    if (favorites.length === 0 && tabIndex === 1) {
      return <NoDataText>You have no favorite posts so far.</NoDataText>;
    }

    if (posts.length === 0 && tabIndex === 0) {
      return <NoDataText>You don't have any posts.</NoDataText>;
    }

    return (
      <FlatList
        contentContainerStyle={NativeStyles.flatlist}
        data={tabIndex === 0 ? posts : favorites}
        keyExtractor={(item: CustomPost) => item.id.toString()}
        renderItem={({ item, index }) => (
          <PostItem
            isFavorite={item.favorite}
            isRead={item.read}
            onPressDelete={() => this.deletePost(index, item.id)}
            onPressItem={() => this.goToDetails(item, index)}
            title={item.title}
          />
        )}
      />
    );
  };

  render() {
    const { tabIndex } = this.state;
    return (
      <MainContainer>
        <StatusBar backgroundColor={theme.green} barStyle="light-content" />
        <Tabs
          items={[
            { title: 'All', width: 50 },
            { title: 'Favorites', width: 50 },
          ]}
          key={tabIndex}
          onChangeIndex={(newIndex: number) => this.setState({ tabIndex: newIndex })}
          selectedIndex={tabIndex}
        />
        <Container>{this.renderTabContent()}</Container>
        <Button
          color={theme.red}
          iconName="md-trash"
          name="Delete All"
          onPress={this.deleteAll}
          width="100%"
        />
      </MainContainer>
    );
  }
}

export default connector(Posts);
