import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import AlbumCategory from "../components/AlbumCategory";

// import data from "../assets/data/albumCategories";
import { listAlbumCategories } from "../src/graphql/queries";

//
//
const HomeScreen = () => {
  const [albumCategory, setAlbumCategory] = useState([]);

  useEffect(() => {
    const fetchalbumCategory = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(listAlbumCategories)
        );

        setAlbumCategory(response.data.listAlbumCategories.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchalbumCategory();
  }, []);
  //
  //
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategory}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlbumCategory albums={item.albums.items} title={item.title} />
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
