import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details, Posts } from '../screens';
import { theme } from '../utils/theme';

export type RootStackParamList = {
  Details: undefined;
  Posts: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Posts"
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.green,
      },
      headerTintColor: theme.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name="Posts" component={Posts} />
    <Stack.Screen name="Details" component={Details} options={{ title: 'Post' }} />
  </Stack.Navigator>
);

export default RootStack;
