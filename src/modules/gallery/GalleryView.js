import React from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../../styles';
import fonts from "../../styles/fonts";

export default function GalleryScreen(props) {

  const shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }


  const imageId = shuffle([17090, 12340, 12347, 12360, 12392, 11485, 10486, 10456, 17090, 17085, 17100, 17194, 17199, 17334, 17689, 17697])
  const _renderItem = ({ item, index }) => {
    const minRange = 60000;
    const maxRange = 60200;
    const bookmarkRand = Math.round(Math.random());
    const rating = Math.random() * 4;
    return (
        <View key={index} style={styles.container}>
          <ImageBackground
              imageStyle={{
                height: "100%",
              }}

              source={{uri: `https://spoonacular.com/recipeImages/${imageId[index]}-636x393.jpg`}}
              style={styles.lightBoxContainer}
          >
            <ImageBackground style={styles.ratingContainer} source={require("../../../assets/images/rating.png")}>
              <Text style={styles.ratingText}>{rating.toFixed(2)}</Text>
            </ImageBackground>
            <Image
                source={bookmarkRand === 0 ? require("../../../assets/images/bookmark.png") : require("../../../assets/images/unbookmark.png")}
                style={styles.bookmarkIcon}/>
            <View style={[styles.overlay, {height: 220}]}/>
            <Text style={styles.itemTitle}>{item['title']}</Text>
          </ImageBackground>
          {/*<View>*/}
          {/*  <Text>{_processIngredients(item['ingredients'])}</Text>*/}
          {/*</View>*/}
        </View>
    );
  };

  if (props.isLoading) {
    return (<Text>ABc</Text>)
  } else {
    return (
        <View
            // source={require('../../../assets/images/background_white.png')}
            style={styles.backgroundStyle}

        >{props.navigation.state && props.navigation.state.params && props.navigation.state.params['isFriend'] ?
            <TouchableOpacity onPress={(e) => props.navigation.navigate("Chat")} style={{
              position: 'absolute',
              bottom: 20,
              right: 10,
              zIndex: 9999,

            }}>

              <Image style={styles.chatIcon} source={require('../../../assets/images/chatIcon.png')}/>
            </TouchableOpacity> : null}
          <View style={{height: 10}}/>
          <FlatList
              data={shuffle(props.images)}
              horizontal={false}
              numColumns={1}
              keyExtractor={(item, index) => index.toString()}
              renderItem={_renderItem}
          />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  chatIcon: {
    width: 70,
    height: 70,
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    borderRadius: 30,
    shadowRadius: 10,
    shadowOpacity: 1.0
  },
  container: {
    marginVertical: 10,
    backgroundColor: colors.white,
    width: "87%",
    height: 220,
    alignSelf: "center",
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1.0
  },
  backgroundStyle: {
    width: "100%",
    backgroundColor: "rgba(256, 256, 256, 1)"
  },
  lightBoxContainer: {
    width: "100%",
    height: "100%"
  },
  topImage: {
    flex: 1,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
  imagesRow: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  itemTitle: {
    fontFamily: fonts.primaryLight,
    fontWeight: "700",
    fontSize: 22,
    color: 'white',
    position: 'absolute',
    left: 8,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10,
    bottom: 8
  },
  image: {
    flex: 1,
    height: 100,
    borderRadius: 5,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: 'black',
    width: "100%"
  },
  bookmarkIcon: {
    position: 'absolute',
    top: -12,
    zIndex: 20,
    right: 10,
    height: 50,
    width: 50
  },
  ratingText: {
    color: 'white',
    fontWeight: "600",
    fontSize: 11,
    marginTop: 2,
    marginRight: 16
  },
  ratingContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 20,
    top: 8,
    zIndex: 20,
    position: 'absolute',
    left: 10,
  }
});
