import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import Router from "./src/router/Router";
import Constants from "expo-constants";
import colors from "./src/styles/colors";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <Router />
      <StatusBar style="light" backgroundColor={colors.tealGreen} />
    </SafeAreaView>
  );
};

export default App;
