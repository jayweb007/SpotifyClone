import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useRoute } from "@react-navigation/native";

import albumDetails from "../assets/data/albumDetails";
import { getAlbum, ListSongs } from "../src/graphql/queries";
import AlbumHeader from "../components/AlbumHeader";
import SongItem from "../components/SongItem";

const AlbumScreen = () => {
  const route = useRoute();
  const [album, setAlbum] = useState();
  const [songs, setSongs] = useState();

  const albumId = route?.params?.id;

  useEffect(() => {
    const fecthAlbum = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(getAlbum, { id: albumId })
        );
        // console.log(response);
        setAlbum(response.data.getAlbum);
      } catch (e) {
        console.log(e);
      }
    };

    fecthAlbum();
  }, []);

  //Fetch Songs
  // useEffect(() => {
  //   const fetchSongs = async () => {
  //     try {
  //       const result = await API.graphql(
  //         graphqlOperation(ListSongs, {
  //           filter: { albumID: { eq: album?.id } },
  //         })
  //       );
  //       console.log(result);
  //       // setSongs(response.data.ListSongs);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchSongs();
  // }, [album]);

  if (!album) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
        }}
      >
        <Image source={require("../assets/images/Pulse-Loader.gif")} />
      </View>
    );
  }

  //
  return (
    <View style={styles.container}>
      <FlatList
        data={album?.songs?.items}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SongItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader albumHead={album} />}
      />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
