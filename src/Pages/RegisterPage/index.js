import React from "react";
import {
  ScrollView,
  StyleSheet,
  TextInputBase,
  View,
  SafeAreaView,
} from "react-native";

import BtnHelp from "../../Components/Buttons/Help";
import BtnNavigate from "../../Components/Buttons/Navigate";
import TitlePompiere from "../../Components/Text/Title";
import TopBar from "../../Components/TopBar";
import BtnHome from "../../Components/Buttons/Home";
import LocationPlate from "../../Components/LocationPlate";
import TextInputExample from "./Input";

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <TopBar>
        <BtnHome></BtnHome>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <BtnHelp></BtnHelp>
      </TopBar>

      <LocationPlate text={"Informações"}></LocationPlate>

      <ScrollView style={styles.inputs}>
        <TextInputExample textForLabel={"Cidade"} placeholder={"Juiz de Fora"}  value={""} marginBot={30}/>
        <TextInputExample  textForLabel={"Riacho"} placeholder={"Paraibuna"}  value={""} marginBot={30}/>
        <TextInputExample  textForLabel={"Data"} placeholder={"25-15-2023"} keyboardType={"numeric"} value={""} marginBot={30}/>
        <TextInputExample  textForLabel={"Coletores"} placeholder={"João Silva"} value={""} marginBot={30}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    alignContent: "center",
    flexDirection: "column",

    height: "100%",
    width: "100%",

    backgroundColor: "#fff",
  },
  inputs:{
    height: "100%",

    margin:30,
  }
});
