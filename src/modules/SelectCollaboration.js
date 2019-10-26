import {Image, ImageBackground, StyleSheet, View, Text, Platform} from 'react-native';
import React from "react";
import RNSTextInput from "../components/TextInput";
import {colors, fonts} from "../styles";
import RNSButton from "../components/Button";
import {SocialIcon} from "react-native-elements";

export default class SelectCollaboration extends React.Component {

    render() {
        return (
            <ImageBackground source={require("../../assets/images/background.png")}
                             style={{height: "100%", width: "100%"}}
                             resizeMode={"cover"}>
                <Image
                    style={styles.logoImage}
                    resizeMode={"contain"}
                    source={require("../../assets/images/selectColaboration.png")}/>
                <View style={{width: "80%", alignSelf: "center"}}>
                    <RNSButton caption={"Get Personalised Recipes"} style={{marginTop: 20}} primary={false} secondary={true} onPress={(e) => this.props.navigation.navigate('Gallery', {isFriend: false})}/>
                    <RNSButton caption={"Cook With a Friend"} style={{marginTop: 20}} primary={false} secondary={true} onPress={(e) => this.props.navigation.navigate('Gallery', {isFriend: true})}/>
                    <RNSButton caption={"Cook with a Neighbour"} style={{marginTop: 20}} primary={false} secondary={true} onPress={(e) => this.props.navigation.navigate('Gallery')}/>
                </View>
            </ImageBackground>)
    }

}

const styles = StyleSheet.create({
    logoImage: {
        marginTop: 80,
        height: 280,
        width: "80%",
        alignSelf: "center"
    },
    normalText: {
        color: 'white',
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
