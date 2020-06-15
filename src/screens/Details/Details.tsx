// REACT NATIVE
import React, { Component } from 'react';
import { FlatList, StatusBar } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';
import { withMappedNavigationParams } from 'react-navigation-props-mapper';

// COMPONENTS
import { CommentItem, HeaderButton } from '../../components';

// STYLED & UTILS
import {
  CommentsBar,
  CommentTitle,
  Content,
  CustomText,
  MainContainer,
  NativeStyles,
  TitleField,
  TitleText,
  UserRow,
} from './styles';

// RESOURCES
import { Comment, User } from '../../types';

type DetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  description: string;
  navigation: DetailsNavigationProp;
  postId: number;
};

const comments: Comment[] = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
];

const user: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

class Details extends Component<Props> {
  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          changeableIcon
          iconNameOff="ios-star-outline"
          iconNameOn="ios-star"
          iconSelected={false}
          onButtonPress={() => {}}
        />
      ),
    });
  }

  renderHeader = () => {
    const { description } = this.props;
    return (
      <>
        <Content>
          <TitleText>Description</TitleText>
          <CustomText>{description}</CustomText>
          <TitleText>User</TitleText>
          <UserRow>
            <TitleField>User</TitleField>
            <CustomText>{user.name}</CustomText>
          </UserRow>
          <UserRow>
            <TitleField>Email</TitleField>
            <CustomText>{user.email}</CustomText>
          </UserRow>
          <UserRow>
            <TitleField>Phone</TitleField>
            <CustomText>{user.phone}</CustomText>
          </UserRow>
          <UserRow>
            <TitleField>Website</TitleField>
            <CustomText>{user.website}</CustomText>
          </UserRow>
        </Content>
        <CommentsBar>
          <CommentTitle>COMMENTS</CommentTitle>
        </CommentsBar>
      </>
    );
  };

  render() {
    return (
      <MainContainer>
        <StatusBar barStyle="light-content" />
        <FlatList
          contentContainerStyle={NativeStyles.flatlist}
          data={comments}
          keyExtractor={(item: Comment) => item.id.toString()}
          ListHeaderComponent={() => this.renderHeader()}
          renderItem={({ item }) => <CommentItem body={item.body} />}
        />
      </MainContainer>
    );
  }
}

export default withMappedNavigationParams()(Details);
