import React, { useState } from "react";
import SubTitlePompiere from "../../Components/Text/SubTitles";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Check({ text, action }) {
  //TODO[] adicionar pagians conforme for passado
  const [color, setColor] = useState("#fff");
  function changeColor() {
    switch (color) {
      case "#fff":
        setColor("#0DB71E");
        break;

      case "#0DB71E":
        setColor("#FF0000");
        break;

      default:
        setColor("#0DB71E");
        break;
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={changeColor}
      ></TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth:"100%",

    height: 40,
    marginTop:15,

    flexDirection: "row",


    backgroundColor: "#C0E5FA",
    borderRadius:5,

  },
  button: {
    width:40,
    
    marginRight:"3%",
    borderRadius:5,


    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#000",
  },
  text: {
    padding: 6,

    borderRadius:5,

    textAlignVertical: "center",
  },
});
