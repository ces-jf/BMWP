import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";



export default function ButtonsSelect({ typeButton, page }) {
  const navigate = useNavigation();

  //BTN_BACK
  function backPage() {
    navigate.goBack();
  }

  //BTN_GO
  function goPage() {
    navigate.navigate(page);
  }

  //BTN_HELP
  function goToHelpPage() {
    navigate.navigate("HelpPage");
  }

  //BTN_HOME
  function goToHomePage() {
    navigate.navigate("RegisterPage");
  }

  let functionBtn;
  let imageBtn;
  let rotation = 0;

  switch (typeButton) {
    case "btnBack":
      functionBtn = backPage;
      imageBtn = require("../../../assets/Arrow.png");
      break;
    case "btnGo":
      functionBtn = goPage;
      imageBtn = require("../../../assets/Arrow.png");
      rotation = 180;
      break;
    case "btnHelp":
      functionBtn = goToHelpPage;
      imageBtn = require("../../../assets/Help.png");
      break;
    case "btnHome":
      functionBtn = goToHomePage;
      imageBtn = require("../../../assets/Home.png");
      break;

    default:
      imageBtn = "";
      break;
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={functionBtn}>
        <Image source={imageBtn} style={[styles.buttonImage,{ transform: [{ rotate: `${rotation}deg`}]}]} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    height: "100%",
    width: "100%",

    padding: 15,

    borderRadius: 100,
    backgroundColor: "#fff",
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
