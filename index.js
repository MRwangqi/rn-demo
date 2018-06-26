import {AppRegistry} from 'react-native';
import App from './App';

import {StackNavigator, TabNavigator, TabBarBottom} from "react-navigation"
import Home from "./app/js/View/HomeComponent"

import Main from "./app/js/View/Main"
import Profile from "./app/js/View/Profile"
import TabBarItem from "./app/js/widget/TabBarItem";
import React from "react";


const TabNav = TabNavigator({
    Test1: {
        screen: Main, navigationOptions: ({navigation}) => ({
            tabBarLabel: '主页1',
        }),
    },
    Test2: {
        screen: Main, navigationOptions: ({navigation}) => ({
            tabBarLabel: '主页2',
        }),
    },
}, {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        style: {backgroundColor: '#2b98f0', height: 40},
        labelStyle: {
            fontSize: 12, // 文字大小
        },
        indicatorStyle: {
            backgroundColor: '#222',
        },
    },

});


/**
 * 底部导航栏
 */
const bottomNav = TabNavigator({
        Main: {
            screen: Main, navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./app/res/main_home_normal.png')}
                        selectedImage={require('./app/res/main_home_focus.png')}
                    />
                )
            }),
        },
        Profile: {
            screen: Profile, navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./app/res/main_my_normal.png')}
                        selectedImage={require('./app/res/main_my_focus.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#d81e06',
            inactiveTintColor: '#bfbfbf',
            style: {backgroundColor: '#f1f1f1', height: 40},
            labelStyle: {
                fontSize: 12, // 文字大小
            },
        }
    });

const Nav = StackNavigator(
    {
        tabNav: {
            screen: bottomNav, navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                headerStyle: {
                    height: 0
                },
            }),
        },
        Home: {screen: Home}
    }, {
        headerStyle: {
            backgroundColor: '#f4511e',
            height: 40
        },
        headerTintColoe: '#fff',
        headerTitleStyle: {
            fontSize: 16,
            color: 'blue',
            fontWeight: 'bold'
        }
    }
);


AppRegistry.registerComponent('react_navigation_demo', () => Nav);
