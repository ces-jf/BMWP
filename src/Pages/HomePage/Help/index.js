import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TopBar from "../../../Components/TopBar";
import BtnNavigate from "../../../Components/Buttons/Navigate";
import BtnBack from "../../../Components/Buttons/Back";
import TitlePompiere from "../../../Components/Text/Title";

export default function HelpHomePage() {
  return (
    <View style={styles.container}>
      <TopBar>
        <BtnBack></BtnBack>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <span></span>
        <span></span>
      </TopBar>
      <View>
        <BtnNavigate text={"Referência Bibliográfica"}></BtnNavigate>
        <Text>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx</Text>
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
