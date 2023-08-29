import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SubTitlePompiere from "../Text/SubTitles";

export default function Span() {
  return (
    <View>
      <TouchableOpacity style={styles.plateArea} onPress={() => {}}>
      <SubTitlePompiere color={"#000"} fontSize={24} text={""}></SubTitlePompiere>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  plateArea: {
    height: 50,
    width: 50,
  },
});
