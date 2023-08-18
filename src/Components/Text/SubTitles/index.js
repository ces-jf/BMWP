import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SubTitlePompiere({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign:"center",
    fontFamily: "Pompiere_400Regular",
    fontSize: 13,
    textTransform: "capitalize",
    color: "#909090",
  },
});
