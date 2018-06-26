import React, {Component} from "react"

import {
    View,
    Text,
    WebView,
    Dimensions
} from "react-native"

const scrrenWidth = Dimensions.get("window").width

export default class HomeComponent extends Component {
    static navigationOptions = {
        title: "详情",
        headerStyle: {
            backgroundColor: 'white',
            height: 40
        },
        headerTintColoe: '#fff',
        headerTitleStyle: {
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold'
        }
    };

    render() {
        const params = this.props.navigation.state.params
        return (
            <WebView
                style={{width: scrrenWidth, flex: 1}}
                source={{uri: params.item.link}}
                onLoad={(e) => console.log('onLoad')}
                onLoadEnd={(e) => console.log('onLoadEnd')}
                onLoadStart={(e) => console.log('onLoadStart')}
                renderError={() => {
                    console.log('renderError')
                    return <View><Text>renderError回调了，出现错误</Text></View>
                }}
                renderLoading={() => {
                    return <View><Text>这是自定义Loading...</Text></View>
                }}
            />
        )
    }
}