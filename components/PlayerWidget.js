import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import albumDetails from "../assets/data/albumDetails";

const song = albumDetails.songs[0];
//
//
const PlayerWidget = () => {
  let [fontsLoaded] = useFonts({
    SailecMedium: require("../assets/fonts/SailecMedium.ttf"),
  });
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(null);
  const [position, setPosition] = useState(null);

  const onPlayBackStatusUpdate = (status) => {
    console.log(status);
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    //Play Current Song

    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }

    if (isPlaying) {
      await sound.pauseAsync();
      // await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 3,
          width: `${getProgress()}%`,
          backgroundColor: "#81b71a",
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: song.imageUri }}
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.title}>{song.title}</Text>
            <Entypo name="dot-single" size={24} color="#ccc" />
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name="hearto"
              size={24}
              color="#ccc"
              style={{ marginRight: 25 }}
            />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={24}
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 79,
    width: "100%",
    backgroundColor: "#191919",
    flexDirection: "column",
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
