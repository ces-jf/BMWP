import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnTrash() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
      <Image
          source={require('../../../../assets/Trash.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
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
