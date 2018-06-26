import {StackNavigator, TabNavigator, TabBarBottom} from "react-navigation"
import Home from "../View/HomeComponent"


import Main from "../View/Main"
import Profile from "../View/Profile"
import TabBarItem from "../widget/TabBarItem";
import React from "react";


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
                tabBarLabel: '首页',
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
            activeTintColor: '#0161a1',
            inactiveTintColor: '#979797',
            style: {backgroundColor: '#ffffff',},
            labelStyle: {
                fontSize: 12, // 文字大小
            },
        }
    });

export const Nav = StackNavigator(
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
    }
);


