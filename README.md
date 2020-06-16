# Posts Mobile App

This is a Sample React Native App with RN62 together with Typescript and Redux. In this app, all the data shown comes from https://jsonplaceholder.typicode.com

Posts App lets you:

- See a list of post titles
- Tap on any post and navigate to another screen where its details are shown. Details are referred to description, user info that made the post, and list of comments related.
- Mark a post as read, which is done automatically when you go to the Details screen.
- Mark a post as favorite.
- Switch between "All" and "Favorites" tabs.
- Swipe to the left if you want to delete a post. And if that post was marked as a favorite, it is also removed from the Favorites tab.
- Reload all the posts by tapping on the refresh button.
- Delete all the posts by tapping on the delete button.

## Getting started

Before cloning this reposity you must check that you have `node`, `yarn`, `react-native-cli` and Android Studio installed. If you want to run the iOS app you will also need `cocoapods` and Xcode installed.

After cloning the repo follow this steps:

```
$ yarn install
```

And in order to run the iOS app:

```
$ cd ios && pod install
```

## Create the .env file

Create a `.env` file in the project's root and add this line:

```
API_URL=https://jsonplaceholder.typicode.com
```

## launch iOS

`$ react-native run-ios` or from XCode opening the workspace file

## launch Android

`$ react-native run-android` or from Android Studio

## Libraries used

- React Native version: 0.62.2
- TypeScript v3.8.3
- React Navigation v5
- `react-native-config` This library allows access to the project config variables through the `.env` file. Ideally, the `.env` file should not be in the repo because it stores variables that must be kept safe, such as API's URLs, services Keys such as Sentry, Google, among others.
- `redux`, `react-redux` and `redux-thunk` It allows to manage a global state in the app and its DevTools tool facilitates to trace any change of the state, which is awesome.
- `eslint` and `prettier` Used to efficiently identify errors in the code and fix them.
- `styled-components` It's an organized way to add styles to components, makes them more readable.
- `react-navigation-props-mapper` Allows easier access to the parameters of a screen as if they were props.
- `react-native-vector-icons` Used to add customizable icons from different available bundles.
- `react-native-gesture-handler` Used to add the option to recognize the swipe to the left gesture and delete a post.
- `react-native-action-button` Used to facilitate the programming of the Button component and to handle a simpler and cleaner code to return a floating button in the case of android.