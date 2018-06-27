import React, {Component} from "react"

import {
    View,
    Text,
    Button,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    ToastAndroid
} from "react-native"

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';


import ListComponent from "./ListComponent"

/**
 * 主页
 */
export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabs: ["首页", "项目"],
            lists: [],
            refreshing: false,
            page: 0,//分页

        }
    }

    render() {
        return (
            <ScrollableTabView
                tabBarPosition='top'
                initialPage={0}
                locked={false}
                tabBarActiveTextColor="red"
                tabBarInactiveTextColor="#333"
                tabBarUnderlineStyle={{backgroundColor: 'red'}}
                tabBarTextStyle={{fontSize: 14}}
                tabBarBackgroundColor="white"
                renderTabBar={() => <ScrollableTabBar/>}
                onChangeTab={(obj) => {
                    console.log('index:' + obj.i);
                }}
            >
                {
                    this.state.tabs.map((tab, key) => {
                        return (
                            <ListComponent key={key} tabLabel={tab} navigation={this.props.navigation}/>
                        )
                    })
                }
            </ScrollableTabView>
        )
    }


}
