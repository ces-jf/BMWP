import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TopBar from "../../Components/TopBar";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <TopBar></TopBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
