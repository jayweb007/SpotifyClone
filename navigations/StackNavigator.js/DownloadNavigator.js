import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Downloads from "../../screens/Downloads";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const DownloadStack = createNativeStackNavigator();

export default function DownloadNavigator() {
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name="Downloads"
        component={Downloads}
        options={{ headerTitle: "Downloads Title" }}
      />
    </DownloadStack.Navigator>
  );
}
