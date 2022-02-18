import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DownloadNavigator from "./StackNavigator.js/DownloadNavigator";
import HomeNavigator from "./StackNavigator.js/HomeNavigator";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#81b71a",
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ navigation }) => ({
          headerShown: false,
          title: "Home ",
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#000" },
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color="#ffffff"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={DownloadNavigator}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={DownloadNavigator}
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="my-library-music" size={24} color={color} />
          ),
          tabBarBadge: 1,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={DownloadNavigator}
        options={{
          title: "Premium",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="spotify" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
