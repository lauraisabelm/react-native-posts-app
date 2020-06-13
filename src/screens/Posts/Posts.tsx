// REACT NATIVE
import React, { Component } from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';

type PostsNavigationProp = StackNavigationProp<RootStackParamList, 'Posts'>;

type Props = {
  navigation: PostsNavigationProp;
};

class Posts extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text>Posts</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default Posts;
