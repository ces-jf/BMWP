import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import TopBar from "../../Components/TopBar";
import BtnNavigate from "../../Components/Buttons/Navigate";
import BtnHelp from "../../Components/Buttons/Help";
import Span from "../../Components/Span"
import TitlePompiere from "../../Components/Text/Title";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <TopBar>
        <Span></Span>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <BtnHelp></BtnHelp>
      </TopBar>

      <ScrollView>

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
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",

    height: "100%",
    width: "100%",

    backgroundColor: "#fff",
  },
});
