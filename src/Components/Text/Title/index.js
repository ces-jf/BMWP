import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TitlePompiere({text, color}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color || "#000" }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign:"center",
    fontFamily: "Pompiere_400Regular",
    fontSize: 34,
    textTransform: "uppercase",
  },
});
