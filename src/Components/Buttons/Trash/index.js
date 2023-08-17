import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnTrash() {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Image
          source={require('../../../../assets/Trash.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#F38E8E",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
