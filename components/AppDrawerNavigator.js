import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {appTabNavigator} from './appTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:appTabNavigator
    },
    Setting:{
        screen : SettingScreen
    }
    },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        intialRouteName:'home'
})