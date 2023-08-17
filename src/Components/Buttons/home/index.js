import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnHome() {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Image
          source={require('../../../../assets/Home.png')}
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
    backgroundColor: "#fff",
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
