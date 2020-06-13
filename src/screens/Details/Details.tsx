// REACT NATIVE
import React, { Component } from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';

type DetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  navigation: DetailsNavigationProp;
};

class Details extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Details</Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default Details;
