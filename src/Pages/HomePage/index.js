import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import BtnHelp from "../../Components/Buttons/Help";
import BtnNavigate from "../../Components/Buttons/Navigate";
import TitlePompiere from "../../Components/Text/Title";
import TopBar from "../../Components/TopBar";
import Span from "../../Components/Span"

export default function HomePage() {
  return (
    <View style={styles.container}>
      <TopBar>
        <Span></Span>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <BtnHelp></BtnHelp>
      </TopBar>

      <ScrollView>

        <Span></Span>
        <BtnNavigate text={"Armitage et al. – 1983"}></BtnNavigate>
        <BtnNavigate text={"Junqueira & Campos - 1998"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2000"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2018"}></BtnNavigate>

      </ScrollView>
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
