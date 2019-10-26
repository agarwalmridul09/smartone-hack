import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import fonts from "../../styles/fonts";
import ImagePicker from 'react-native-image-picker'

this.camera = undefined;
export default function HomeScreen(props) {
    const rnsUrl = 'https://reactnativestarter.com';
    let handleClick = async () => {
        if (this.camera) {
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options);
            props.getRecipes(data.base64);
            props.navigation.navigate({ routeName: 'Collaborate' });
        }
    };

    let handleChoosePhoto = () => {
        const options = {
            noData: false,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                props.getRecipes(response.data);
                props.navigation.navigate({ routeName: 'Collaborate' });
            }
        })
    };

  return (
      <View style={styles.container}>
          <Text style={styles.titleDescription}/>
          <View style={styles.clickContainer}>
              <TouchableOpacity onPress={() => handleChoosePhoto()}>
                  <Image source={require("../../../assets/images/scan/uploadImageIcon.png")}
                         tintColor={"#ffffff"}
                         style={styles.clickIcon}
                  />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClick()}>
                  <Image source={require("../../../assets/images/scan/clickPicture.png")}
                         tintColor={"#ffffff"}
                         style={styles.clickIcon}
                  />
              </TouchableOpacity>
          </View>
          <View style={styles.scanArea}>
              <View style={styles.scan}>
                  <Image
                      source={require('../../../assets/images/scan/top-left.png')}
                      style={{
                          width: 32,
                          height: 32,
                          top: 0,
                          left: 0,
                          position: 'absolute'
                      }}
                  />
                  <Image
                      source={require('../../../assets/images/scan/top-right.png')}
                      style={{
                          width: 32,
                          height: 32,
                          top: 0,
                          right: 0,
                          position: 'absolute'
                      }}
                  />
                  <Image
                      source={require('../../../assets/images/scan/left-bottom.png')}
                      style={{
                          width: 32,
                          height: 32,
                          bottom: 0,
                          left: 0,
                          position: 'absolute'
                      }}
                  />
                  <Image
                      source={require('../../../assets/images/scan/right-bottom.png')}
                      style={{
                          width: 32,
                          height: 32,
                          bottom: 0,
                          right: 0,
                          position: 'absolute'
                      }}
                  />
              </View>
          </View>
          <RNCamera
              ref={ref => {
                  this.camera = ref;
              }}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              style={styles.section}
              androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                  title: 'Permission to use audio recording',
                  message: 'We need your permission to use your audio',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({barcodes}) => {
                  console.log(barcodes);
              }}
          />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    clickIcon: {
        height: 50,
        width: 50,
    },
    scanArea: {
        flex: 1,
        zIndex: 5,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    },
    scan: {
        width: 320,
        position: 'relative',
        height: 420
    },
    clickContainer: {
        marginBottom: 20,
        zIndex: 9999,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleDescription: {
        color: 'white',
        zIndex: 5,
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: fonts.primaryRegular
  },
  section: {
    flex: 1,
      height: "100%",
      position: 'absolute',
      width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
