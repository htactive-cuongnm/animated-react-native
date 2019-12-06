import {createBottomTabNavigator} from 'react-navigation';
import {Scroll, TabAnimation, Show, Text} from '../screen/index';
import Icon from './icon';
import React from 'react';
import TabBar from './custom';

export default createBottomTabNavigator(
  {
    HomeScreen: {
      screen: Scroll,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="home" color={tintColor} />,
      },
    },
    SearchScreen: {
      screen: TabAnimation,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="search" color={tintColor} />,
      },
    },
    FavoritesScreen: {
      screen: Show,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="favorites" color={tintColor} />
        ),
      },
    },
    ProfileScreen: {
      screen: Text,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="profile" color={tintColor} />,
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#eeeeee',
      inactiveTintColor: '#222222',
    },
  },
);
