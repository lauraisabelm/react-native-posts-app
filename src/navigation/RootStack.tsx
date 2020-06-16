// REACT NATIVE
import * as React from 'react';

// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import { Details, Posts } from '../screens';

// UTILS
import { theme } from '../utils/theme';
import { isIos } from '../utils/responsive';

export type RootStackParamList = {
  Details: {
    position: number;
  };
  Posts: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const defaultOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: theme.green,
    elevation: 0,
  },
  headerTintColor: theme.white,
  headerTitleStyle: {
    fontWeight: '500',
  },
};

const DetailsOptions = {
  ...defaultOptions,
  headerStyle: {
    ...defaultOptions.headerStyle,
    elevation: 15,
  },
  title: isIos ? 'Post' : '',
};

const RootStack = () => (
  <Stack.Navigator initialRouteName="Posts" screenOptions={defaultOptions}>
    <Stack.Screen name="Posts" component={Posts} />
    <Stack.Screen name="Details" component={Details} options={DetailsOptions} />
  </Stack.Navigator>
);

export default RootStack;
