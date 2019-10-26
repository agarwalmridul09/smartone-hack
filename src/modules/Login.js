import {Image, ImageBackground, StyleSheet, View, Text, Platform} from 'react-native';
import React from "react";
import RNSTextInput from "../components/TextInput";
import {colors, fonts} from "../styles";
import RNSButton from "../components/Button";
import {SocialIcon} from "react-native-elements";

export default class Login extends React.Component {

    render() {
        return (
            <ImageBackground source={require("../../assets/images/background.png")}
                             style={{height: "100%", width: "100%"}}
                             resizeMode={"cover"}>
                <Image
                    style={styles.logoImage}
                    resizeMode={"contain"}
                    source={require("../../assets/images/logo.png")}/>
                <View style={{width: "80%", alignSelf: "center"}}>
                    <RNSTextInput placeholder={"Email"} type={"email"} placeholderTextColor={"white"}/>
                    <RNSTextInput placeholder={"Password"} secureTextEntry={true} type={"password"} placeholderTextColor={"white"}/>
                    <Text style={styles.normalText}>Don't Have An Account? Sign Up</Text>
                    <RNSButton caption={"Login"} style={{marginTop: 20}} primary={false} secondary={true} onPress={(e) => this.props.navigation.navigate('Home')}/>
                    <View style={{height: 10}}/>
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />
                    <SocialIcon
                        title='Sign In With GMail'
                        button
                        type='google'
                    />
                </View>
            </ImageBackground>)
    }

}

const styles = StyleSheet.create({
    logoImage: {
        height: 280,
        marginTop: 50,
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
