import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TitlePompiere from "../../Text/Title";
import SubTitlePompiere from "../../Text/SubTitles";

export default function BtnNavigate({text, action}) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
      <SubTitlePompiere color={"#000"} fontSize={24} text={text}></SubTitlePompiere>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 257,
    borderRadius: 10,
    marginTop:50,
    backgroundColor:"#C0E5FA",

    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
  },
});
