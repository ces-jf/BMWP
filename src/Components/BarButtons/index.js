import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Entypo';


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
      imageBtn = "chevron-left";
      break;
    case "btnGo":
      functionBtn = goPage;
      imageBtn = "chevron-right";
      break;
    case "btnHelp":
      functionBtn = goToHelpPage;
      imageBtn = "help";
      break;
    case "btnHome":
      functionBtn = goToHomePage;
      imageBtn = "home";
      break;

    default:
      imageBtn = "minus";
      break;
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={functionBtn}>
        <Icon name={imageBtn} size={20} color="#000" />
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
