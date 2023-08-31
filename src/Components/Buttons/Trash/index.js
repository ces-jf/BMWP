import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Octicons';
export default function BtnTrash() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
      <Icon name="trash" size={30}  color={"white"}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingLeft: 15,
    paddingRight: 35,
    
    marginTop: 10,
    borderRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#F38E8E",

    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",

  },
  buttonImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
