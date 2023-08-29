import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnHelp() {
  const navigation = useNavigation();
  function goToHelpPage() {
    navigation.navigate("HelpPage");
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={goToHelpPage}>
        <Image
          source={require("../../../../assets/Help.png")}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 45,
    height: 45,
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
