import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import Icon from '~/components/Icon';
import Login from '~/screens/Login';
import CodeValidation from '~/screens/CodeValidation';
import Register from '~/screens/Register';
import Settings from '~/screens/Settings';
import Map from '~/screens/Map';

import * as theme from '~/themes';

const Tabs = createBottomTabNavigator(
  {
    Map: {
      screen: Map,
      navigationOptions: {
        title: 'Map',
        tabBarIcon: ({focused}) => (
          <Icon
            name={'pin'}
            size={24}
            color={focused ? theme.light : theme.primary}
          />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({focused}) => (
          <Icon
            name={'settings'}
            size={24}
            color={focused ? theme.light : theme.primary}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Map',
    tabBarOptions: {
      style: {
        height: 60,
        borderTopWidth: 0,
      },
      activeBackgroundColor: theme.primaryLight,
      inactiveBackgroundColor: theme.primaryLight,
      activeTintColor: theme.light,
      inactiveTintColor: theme.primary,
    },
  },
);

const SignedInRoutes = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Tabs',
  },
);

const SignedOutRoutes = createStackNavigator(
  {
    CodeValidation: {
      screen: CodeValidation,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
    navigationOptions: {
      headerShown: false,
    },
  },
);

export const createRouter = (signed) =>
  createAppContainer(
    createSwitchNavigator(
      {SignedOutRoutes, SignedInRoutes},
      {
        initialRouteName: signed ? 'SignedInRoutes' : 'SignedOutRoutes',
      },
    ),
  );

