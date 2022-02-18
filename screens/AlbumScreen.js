import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import albumDetails from "../assets/data/albumDetails";
import AlbumHeader from "../components/AlbumHeader";
import SongItem from "../components/SongItem";

const AlbumScreen = () => {
  const route = useRoute();

  console.log(route?.params?.id);

  //
  return (
    <View style={styles.container}>
      <FlatList
        data={albumDetails.songs}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SongItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader albumHead={albumDetails} />}
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
