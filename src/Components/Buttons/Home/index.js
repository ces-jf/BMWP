import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnHome() {

  const navigation = useNavigation();
  function goToHomePage(){
    navigation.navigate("HomePage")
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={goToHomePage}>
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
    height: 45,
    width: 45,
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