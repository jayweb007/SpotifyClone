import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

//
//
//
const Album = ({ album }) => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    SailecMedium: require("../assets/fonts/SailecMedium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPress = () => {
    // console.warn(`Album ID : ${album.id}`);
    navigation.navigate("AlbumScreen", { id: album.id });
  };

  //
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: album.imageUri }}
        style={{ width: "100%", height: 175, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{album.artistsHeadline}</Text>
    </Pressable>
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
