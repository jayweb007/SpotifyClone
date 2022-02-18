import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";

const AlbumHeader = ({ albumHead }) => {
  let [fontsLoaded] = useFonts({
    SailecMedium: require("../assets/fonts/SailecMedium.ttf"),
    SailecBold: require("../assets/fonts/SailecBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: albumHead.imageUri }}
        style={{
          width: 200,
          height: 200,
          resizeMode: "contain",
          marginBottom: 35,
        }}
      />
      <Text style={styles.name}>{albumHead.name}</Text>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Text style={styles.by}>By {albumHead.by}</Text>
        <Entypo name="dot-single" size={24} color="#ccc" />
        <Text style={styles.likes}>{albumHead.numberOfLikes} Likes</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "SailecBold",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          PLAY
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // flexDirection: "column",
    marginVertical: 10,
    marginBottom: 30,
  },
  name: {
    fontSize: 27,
    fontFamily: "SailecBold",
    color: "#fff",
    paddingBottom: 15,
  },
  by: {
    fontSize: 17,
    fontFamily: "SailecMedium",
    color: "#ccc",
    paddingBottom: 7,
  },
  likes: {
    fontSize: 17,
    fontFamily: "SailecMedium",
    color: "#ccc",
    paddingBottom: 7,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 65,
    backgroundColor: "#81b71a",
    borderRadius: 100,
  },
});
