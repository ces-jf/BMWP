import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import BtnHelp from "../../Components/Buttons/Help";
import BtnBack from "../../Components/Buttons/Back";
import BtnGo from "../../Components/Buttons/Go";
import BtnNavigate from "../../Components/Buttons/Navigate";
import TitlePompiere from "../../Components/Text/Title";
import Bar from "../../Components/Bar";
import Span from "../../Components/Span"

export default function ChangeBMWP() {
  return (
    <View style={styles.container}>
      <Bar>
        <Span></Span>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <BtnHelp></BtnHelp>
      </Bar>

      <ScrollView>

        <Span></Span>
        <BtnNavigate text={"Armitage et al. – 1983"}></BtnNavigate>
        <BtnNavigate text={"Junqueira & Campos - 1998"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2000"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2018"}></BtnNavigate>

      </ScrollView>

      <Bar>
        <BtnBack></BtnBack>
      </Bar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",

    height: "100%",
    width: "100%",

    backgroundColor: "#fff",
  }
});
