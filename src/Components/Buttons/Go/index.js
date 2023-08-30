import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnGo({pageGo}) {

  const navigate = useNavigation();
  function backPage(){
    navigate.navigate(pageGo)
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
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: "#fff",

    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    transform: [{ rotate: '180deg'}]
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
});
