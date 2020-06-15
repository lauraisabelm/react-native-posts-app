// REACT NATIVE
import React, { Component } from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';

// NAVIGATION
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';

// COMPONENTS
import { HeaderButton } from '../../components';

type DetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  navigation: DetailsNavigationProp;
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
