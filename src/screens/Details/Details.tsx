// REACT NATIVE
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StatusBar } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

// LIBS
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

// COMPONENTS
import { CommentItem, HeaderButton } from '../../components';

// STYLED & UTILS
import {
  ActivityContainer,
  CommentsBar,
  CommentTitle,
  Content,
  CustomText,
  MainContainer,
  NativeStyles,
  NoDataMessage,
  TitleField,
  TitleText,
  UserRow,
} from './styles';
import { theme } from '../../utils/theme';

// RESOURCES
import { Comment } from '../../types';
import { RootState } from '../../store/configureStore';
import { markAsRead, updateFavorites, getUser, getComments } from '../../actions';

const mapStateToProps = ({ comments, posts, users }: RootState) => ({
  comments: comments.comments,
  commentsError: comments.commentsError,
  loadingComments: comments.loadingComments,
  loadingUser: users.loadingUser,
  selectedPost: posts.selectedPost,
  user: users.user,
  userError: users.userError,
});

const mapDispatchToProps = {
  markAsReadConnected: (position: number) => markAsRead(position),
  updateFavoritesConnected: (position: number, status: boolean) =>
    updateFavorites(position, status),
  getUserConnected: (id: number) => getUser(id),
  getCommentsConnected: (id: number) => getComments(id),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type DetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  navigation: DetailsNavigationProp;
  position: number;
};

class Details extends Component<Props> {
  componentDidMount() {
    const { selectedPost } = this.props;
    this.setStarButton();
    if (!selectedPost.read) {
      this.markPostAsRead();
    }
    this.getUserInfo();
    this.getCommentsLits();
  }

  setStarButton = () => {
    const { navigation, selectedPost } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          changeableIcon
          iconNameOff="ios-star-outline"
          iconNameOn="ios-star"
          iconSelected={selectedPost.favorite}
          onButtonPress={this.addOrRemoveFavorite}
        />
      ),
    });
  };

  markPostAsRead = async () => {
    try {
      const { markAsReadConnected, position } = this.props;
      await markAsReadConnected(position);
    } catch (err) {
      console.log(err);
    }
  };

  getUserInfo = async () => {
    try {
      const { getUserConnected, selectedPost } = this.props;
      await getUserConnected(selectedPost.userId);
    } catch (err) {
      console.log(err);
    }
  };

  getCommentsLits = async () => {
    try {
      const { getCommentsConnected, selectedPost } = this.props;
      await getCommentsConnected(selectedPost.id);
    } catch (err) {
      console.log(err);
    }
  };

  addOrRemoveFavorite = async () => {
    try {
      const { updateFavoritesConnected, position, selectedPost } = this.props;
      if (selectedPost.favorite) {
        await updateFavoritesConnected(position, false);
      } else {
        await updateFavoritesConnected(position, true);
      }
      this.setStarButton();
    } catch (err) {
      console.log(err);
    }
  };

  renderNoComments = () => {
    const { commentsError, loadingComments } = this.props;

    if (loadingComments) {
      return (
        <ActivityContainer>
          <ActivityIndicator color={theme.green} size="large" />
        </ActivityContainer>
      );
    }
    if (commentsError) {
      return (
        <Content>
          <NoDataMessage>
            There was a problem requesting the data, please try again later.
          </NoDataMessage>
        </Content>
      );
    }

    return (
      <Content>
        <NoDataMessage>This post has no comments yet.</NoDataMessage>
      </Content>
    );
  };

  renderUserInfo = () => {
    const { loadingUser, user, userError } = this.props;

    if (loadingUser) {
      return (
        <ActivityContainer>
          <ActivityIndicator color={theme.green} size="large" />
        </ActivityContainer>
      );
    }

    if (userError) {
      return (
        <Content>
          <NoDataMessage>
            There was a problem requesting the data, please try again later.
          </NoDataMessage>
        </Content>
      );
    }

    return (
      <>
        <UserRow>
          <TitleField>User</TitleField>
          <CustomText>{user ? user.name : ''}</CustomText>
        </UserRow>
        <UserRow>
          <TitleField>Email</TitleField>
          <CustomText>{user ? user.email : ''}</CustomText>
        </UserRow>
        <UserRow>
          <TitleField>Phone</TitleField>
          <CustomText>{user ? user.phone : ''}</CustomText>
        </UserRow>
        <UserRow>
          <TitleField>Website</TitleField>
          <CustomText>{user ? user.website : ''}</CustomText>
        </UserRow>
      </>
    );
  };

  renderHeader = () => {
    const { selectedPost } = this.props;
    return (
      <>
        <Content>
          <TitleText>Description</TitleText>
          <CustomText>{selectedPost.body}</CustomText>
          <TitleText>User</TitleText>
          {this.renderUserInfo()}
        </Content>
        <CommentsBar>
          <CommentTitle>COMMENTS</CommentTitle>
        </CommentsBar>
      </>
    );
  };

  render() {
    const { comments } = this.props;
    return (
      <MainContainer>
        <StatusBar barStyle="light-content" />
        <FlatList
          contentContainerStyle={NativeStyles.flatlist}
          data={comments}
          keyExtractor={(item: Comment) => item.id.toString()}
          ListEmptyComponent={() => this.renderNoComments()}
          ListHeaderComponent={() => this.renderHeader()}
          renderItem={({ item }) => <CommentItem body={item.body} />}
        />
      </MainContainer>
    );
  }
}

export default compose(withMappedNavigationParams(), connector)(Details);
