import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import {colors, fonts} from '../../styles';
import Login from "../Login";
import Chat from "../../Chat";
import SelectCollaboration from "../SelectCollaboration";

// To use this screens please see the full version at https://reactnativestarter.com
// import ProfileScreen from '../containers/ProfileScreen';
// import ArticleScreen from '../containers/ArticleScreen';
// import ChatScreen from '../containers/chat/ChatScreen';
// import MessagesScreen from '../containers/chat/MessagesScreen';
// import ChartsScreen from '../containers/ChartsScreen';

const headerBackground = require('../../../assets/images/background.png');

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
        navigationOptions: () => ({
            header: null
        }),
    },
      Collaborate: {
          screen: SelectCollaboration,
          navigationOptions: {
              tabBarVisible : false,
              header: null
          },
      },
      Chat: {
      screen: Chat,
          navigationOptions: () => ({
              title: 'Dine 99',
              headerBackground: (
                  <Image
                      style={{flex: 1}}
                      source={headerBackground}
                      resizeMode="cover"
                  />
              ),
          }),
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
          title: 'Dine 99',
        headerBackground: (
            <Image
                style={{flex: 1}}
                source={headerBackground}
                resizeMode="cover"
            />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={(e)=>navigation.navigate('Collaborate')}
          style={{
            paddingLeft: 25,
          }}
        >
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);

export default createAppContainer(stackNavigator);
