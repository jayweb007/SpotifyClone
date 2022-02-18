import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";

//
const SongItem = ({ song }) => {
  let [fontsLoaded] = useFonts({
    SailecMedium: require("../assets/fonts/SailecMedium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: song.imageUri }}
        style={{ width: 70, height: 70, resizeMode: "contain" }}
      />
      <View style={{ flex: 1, flexDirection: "column", marginLeft: 15 }}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
      <Entypo name="dots-three-vertical" size={24} color="#ccc" />
    </View>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: "SailecMedium",
    color: "#fff",
    paddingBottom: 7,
  },
  artist: {
    fontSize: 17,
    fontFamily: "SailecMedium",
    color: "#ccc",
  },
});
