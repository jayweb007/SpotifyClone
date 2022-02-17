import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
//
//
//
const Album = ({ album }) => {
  let [fontsLoaded] = useFonts({
    SailecMedium: require("../assets/fonts/SailecMedium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: album.imageUri }}
        style={{ width: "100%", height: 175, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{album.artistsHeadline}</Text>
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 175,
    marginRight: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 17,
    fontFamily: "SailecMedium",
    color: "#ccc",
    marginTop: 10,
  },
});
