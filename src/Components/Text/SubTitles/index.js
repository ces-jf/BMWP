import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SubTitlePompiere({text, fontSize,color}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {fontSize: fontSize || 13 },{color : color ||"#909090"}]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign:"center",
    fontFamily: "Pompiere_400Regular",
    textTransform: "capitalize",
  },
});
