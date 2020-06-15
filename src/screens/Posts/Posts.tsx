// REACT NATIVE
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

// LIBS
import { FlatList } from 'react-native-gesture-handler';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';

// COMPONENTS
import { Button, HeaderButton, PostItem, Tabs } from '../../components';

// RESOURCES
import { CustomPost } from '../../types';

// STYLED & UTILS
import { Container, MainContainer } from './styles';
import { theme } from '../../utils/theme';

type PostsNavigationProp = StackNavigationProp<RootStackParamList, 'Posts'>;

type Props = {
  navigation: PostsNavigationProp;
};

type State = {
  tabIndex: number;
};

const favorites: CustomPost[] = [
  {
    body: 'Cylindrical-coordinate representations to tt (also known as HSL)',
    favorite: true,
    id: 1,
    title: 'Post title 1: Cylindrical-coordinate representations to tt (also known as HSL)',
    read: false,
    userId: 1,
  },
];

const posts: CustomPost[] = [
  {
    body: 'Cylindrical-coordinate representations to tt (also known as HSL)',
    favorite: false,
    id: 1,
    title: 'Post title 1: Cylindrical-coordinate representations to tt (also known as HSL)',
    read: false,
    userId: 1,
  },
  {
    body: 'Cylindrical-coordinate representations to tt (also known as HSL)',
    favorite: false,
    id: 2,
    title: 'Post title 2: Cylindrical-coordinate representations to tt (also known as HSL)',
    read: false,
    userId: 1,
  },
];

class Posts extends Component<Props, State> {
  state = {
    selectedItem: 0,
    tabIndex: 0,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => <HeaderButton iconNameOn="md-refresh" onButtonPress={() => {}} />,
    });
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  addToFavorites = () => {
    console.log('Added to favorites');
  };

  goToDetails = (body: string, id: number) => {
    const { navigation } = this.props;
    navigation.navigate('Details', { description: body, postId: id });
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
        <Container>
          {tabIndex === 0 ? (
            <FlatList
              data={posts}
              keyExtractor={(item: CustomPost) => item.id.toString()}
              renderItem={({ item }) => (
                <PostItem
                  isFavorite={item.favorite}
                  isRead={item.read}
                  onPressDelete={() => {}}
                  onPressItem={() => this.goToDetails(item.body, item.id)}
                  position={item.id}
                  title={item.title}
                />
              )}
            />
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={(item: CustomPost) => item.id.toString()}
              renderItem={({ item }) => (
                <PostItem
                  isFavorite={item.favorite}
                  isRead={item.read}
                  onPressDelete={() => {}}
                  onPressItem={() => this.goToDetails(item.body, item.id)}
                  position={item.id}
                  title={item.title}
                />
              )}
            />
          )}
        </Container>
        <Button color={theme.red} iconName="md-trash" name="Delete All" width="100%" />
      </MainContainer>
    );
  }
}

export default Posts;
