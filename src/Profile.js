import {FlatList, Image, ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import React from "react";
import {fonts} from "./styles";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    title: "Edit Password",
                    showArrow: true
                },
                {
                    title: "Edit Email",
                    showArrow: true
                },
                {
                    title: "Edit Personal Details",
                    showArrow: true
                },
                {
                    title: "Learn more about Dine 99",
                    showArrow: false
                },
                {
                    title: "Bookmarked Recipes",
                    showArrow: true
                },
                {
                    title: "Rate on App Store",
                    showArrow: false
                }
            ]
        }
    }

    renderItem(item) {
        return (
            <View key={Math.random()}>
                <Text style={styles.normalText}>{item.title}</Text>
            </View>
        );

    }

    render() {
        return (
            <ImageBackground
                resizeMode={"contain"}
                style={{width:"100%", height:"100%"}} source={require("../assets/images/ss.png")}/>
        );
    }
}

const styles = StyleSheet.create({
    logoImage: {
        marginTop: 80,
        height: 280,
        width: "80%",
        alignSelf: "center"
    },
    heading: {
        fontSize: 30,
        fontFamily: fonts.primaryRegular,

    },
    normalText: {
        color: 'black',
        alignSelf: 'center',
        marginTop: 18,
        fontWeight: "700",
        fontSize: 14,
        fontFamily: fonts.primaryRegular,
        ...Platform.select({
            android: {
                paddingLeft: 5,
                opacity: 0.9,
            },
        }),
    },
});
