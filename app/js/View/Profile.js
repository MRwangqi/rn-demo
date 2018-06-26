import React, {Component} from "react"

import {
    View,
    Text
} from "react-native"

/**
 * 主页
 */
export default class Profile extends Component {
    static navigationOptions = {
        headerTitle: '首页',//对页面的配置
        tabBarLabel: '首页',
        tabBarIcon:<View style={{height:20,width:20,backgroundColor:'red'}}/>
    };

    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        )
    }
}