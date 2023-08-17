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
    height: 80,
    width: 60,
    borderRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#F38E8E",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
