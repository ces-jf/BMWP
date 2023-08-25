import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnBack({pageBack}) {

  const navigate = useNavigation();
  function backPage(){
    navigate.goBack()
  }
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={backPage}>
      <Image
          source={require('../../../../assets/Arrow.png')}
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
