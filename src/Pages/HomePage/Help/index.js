import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Span from "../../../Components/Span"
import TopBar from "../../../Components/TopBar";
import BtnBack from "../../../Components/Buttons/Back";
import TitlePompiere from "../../../Components/Text/Title";
import LocationPlate from "../../../Components/LocationPlate";
import SubTitlePompiere from "../../../Components/Text/SubTitles";

export default function HelpHomePage() {
  return (
    <View style={styles.container}>

      <TopBar>
        <BtnBack></BtnBack>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <Span></Span>
      </TopBar>

      <LocationPlate text={"Referência Bibliográfica"}></LocationPlate>

      <ScrollView style={styles.scroll} >
        <SubTitlePompiere text={"Sobreira, Gustavo"} fontSize={30}></SubTitlePompiere>
        <Text style={styles.text}>Sobreira, G. P. (2023). Livro: Tavares talentoso, trabalhando trouxe tomate, trigo, talheres, teve também tinto tanto tomou, tivera todo tonto</Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "center",
    justifyContent: "flex-start",

    height: "100%",
    width: "100%",

    backgroundColor: "#fff",
  },
  scroll:{
    margin:30,
  },
  text :{
    minWidth:"100%",
    maxWidth:"100%",

    alignItems:"flex-start",
  }
});
