import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SubTitlePompiere from "../Text/SubTitles";

export default function LocationPlate({text}) {
  return (
    <View style={styles.plateArea}>
      <SubTitlePompiere color={"#000"} fontSize={24} text={text}></SubTitlePompiere>
    </View>
  );
}
const styles = StyleSheet.create({
  plateArea: {
    height: 60,
    width: 257,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft:-40,
    marginTop:30,
    marginBottom: 30,
    backgroundColor:"#C0E5FA",

    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
  },
});
