import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AlbumCategory from "../components/AlbumCategory";

import data from "../assets/data/albumCategories";

//
//
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlbumCategory albums={item.albums} title={item.title} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
