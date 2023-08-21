import React from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "../../Components/TopBar";
import BtnNavigate from "../../Components/Buttons/Navigate";
import BtnHome from "../../Components/Buttons/home";
import TitlePompiere from "../../Components/Text/Title";
import BtnHelp from "../../Components/Buttons/Help";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <TopBar>
        <BtnHome></BtnHome>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <BtnHelp></BtnHelp>
      </TopBar>
      <View>
        <BtnNavigate text={"Armitage et al. – 1983"}></BtnNavigate>
        <BtnNavigate text={"Junqueira & Campos - 1998"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2000"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2018"}></BtnNavigate>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
