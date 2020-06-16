// REACT NATIVE
import * as React from 'react';

// NAVIGATION
import { createStackNavigator } from '@react-navigation/stack';

// RESOURCES
import { Details, Posts } from '../screens';
import { theme } from '../utils/theme';
import { isIos } from '../utils/responsive';

export type RootStackParamList = {
  Details: {
    position: number;
  };
  Posts: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Posts"
    screenOptions={{
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: theme.green,
        elevation: 0,
      },
      headerTintColor: theme.white,
      headerTitleStyle: {
        fontWeight: '500',
      },
    }}
  >
    <Stack.Screen name="Posts" component={Posts} />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: isIos ? 'Post' : '',
      }}
    />
  </Stack.Navigator>
);

export default RootStack;
