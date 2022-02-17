import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Album from "./Album";

//
const AlbumCategory = ({ albums, title }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={albums}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default AlbumCategory;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
    paddingTop: 25,
  },
});
