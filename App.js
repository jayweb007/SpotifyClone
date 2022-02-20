import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import store from "./redux/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Root from "./navigations/Root";
import { getStatusBarHeight } from "react-native-status-bar-height";
import PlayerWidget from "./components/PlayerWidget";
import awsconfig from "./src/aws-exports";

//
Amplify.configure(awsconfig);
const statusBarHeight = getStatusBarHeight();

//
const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <Root />
        <StatusBar />
        <PlayerWidget />
      </Provider>
    </SafeAreaProvider>
  );
};

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    backgroundColor: "#fff",
  },
});
