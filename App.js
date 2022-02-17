import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Root from "./navigations/Root";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusBarHeight = getStatusBarHeight();
const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Root />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: "#fff",
  },
});
