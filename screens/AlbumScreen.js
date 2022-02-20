import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useRoute } from "@react-navigation/native";

import { getAlbum } from "../src/graphql/queries";
import AlbumHeader from "../components/AlbumHeader";
import SongItem from "../components/SongItem";

const AlbumScreen = () => {
  const route = useRoute();
  const [album, setAlbum] = useState();

  const albumId = route?.params?.id;

  useEffect(() => {
    const fecthAlbum = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(getAlbum, { id: albumId })
        );
        //
        setAlbum(response.data.getAlbum);
      } catch (e) {
        console.log(e);
      }
    };

    fecthAlbum();
  }, []);

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
