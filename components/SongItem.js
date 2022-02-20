import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";
import { setSongId } from "../redux/slices/playerWidgetSlice";
import { useDispatch } from "react-redux";

//
const SongItem = ({ song }) => {
  let [fontsLoaded] = useFonts({
    SailecMedium: require("../assets/fonts/SailecMedium.ttf"),
  });
  const dispatch = useDispatch();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPlay = () => {
    dispatch(setSongId(song.id));
  };

  //
  return (
    <TouchableOpacity style={styles.container} onPress={onPlay}>
      <>
        <Image
          source={{ uri: song.imageUri }}
          style={{ width: 70, height: 70, resizeMode: "contain" }}
        />
        <View style={{ flex: 1, flexDirection: "column", marginLeft: 15 }}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <Entypo name="dots-three-vertical" size={24} color="#ccc" />
      </>
    </TouchableOpacity>
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
