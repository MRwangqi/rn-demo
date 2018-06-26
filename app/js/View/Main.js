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


const screenWidth = Dimensions.get("window").width
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
                            <FlatList
                                key={key}
                                tabLabel={tab}
                                data={this.state.lists}
                                renderItem={this._renderItem}
                                //下拉刷新
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({refreshing: true, page: 0})//开始刷新
                                    this._pullNet()
                                }}
                                //上拉加载
                                onEndReachedThreshold={0.1}
                                onEndReached={({distanceFromEnd}) => (
                                    setTimeout(() => {
                                        this.setState({page: this.state.page + 1})
                                        this._pullNet()
                                    }, 0)
                                )}
                            />
                        )
                    })
                }
            </ScrollableTabView>
        )
    }

    _renderItem = ({item, key}) => (
        <TouchableOpacity onPress={() => this._onItemClick(item)}>
            <View style={styles.renderItem} key={key}>

                <View style={{flexDirection: "row", justifyItems: "center"}}>

                    <View style={{flex: 1}}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={{color: "#777"}}>{item.desc} </Text>
                    </View>

                    <Image style={{width: 50, height: 50,}}
                           source={{uri: item.envelopePic}}/>
                </View>


                <View style={{flexDirection: "row", marginTop: 10}}>
                    <Text style={{flex: 1}}>author:{item.author}</Text>
                    <Text>{item.niceDate}</Text>
                </View>

                <View style={{flexDirection: "row", flexWrap: "wrap", marginTop: 10}}>
                    {
                        item.tags.map((value, key) => {
                            return (
                                <Text key={key} style={{
                                    fontSize: 10,
                                    backgroundColor: "#2c96fb",
                                    color: "white",
                                    borderRadius: 10,
                                    alignSelf: "flex-start",
                                    paddingLeft: 5,
                                    paddingRight: 5
                                }}>
                                    {value.name}
                                </Text>
                            )
                        })
                    }
                </View>
            </View>
        </TouchableOpacity>
    );

    _onItemClick(item) {
        this.props.navigation.navigate("Home", {item: item})
    }

    componentDidMount() {
        this._pullNet()
    }

    _pullNet() {
        fetch("http://www.wanandroid.com/article/list/" + this.state.page + "/json")
            .then((response) => response.json())
            .then((jsonData) => {

                if (this.state.page === 0) {
                    this.setState({
                        lists: jsonData.data.datas,
                        refreshing: false,
                    });
                    ToastAndroid.show("刷新成功", ToastAndroid.SHORT, ToastAndroid.CENTER);
                } else {
                    this.setState({
                        lists: this.state.lists.concat(jsonData.data.datas),
                    });
                    ToastAndroid.show("加载成功", ToastAndroid.SHORT, ToastAndroid.CENTER);
                }

            }).catch((error) => {
            ToastAndroid.show(error, ToastAndroid.SHORT)
        }).done()

    }

}

const styles = StyleSheet.create({
    renderItem: {
        backgroundColor: "white",
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 8,
        paddingBottom: 10,
    },
    itemTitle: {
        fontWeight: "bold",
        color: "#222",
        fontSize: 15
    }
});