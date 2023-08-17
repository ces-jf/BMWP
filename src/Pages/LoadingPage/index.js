import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TitlePompiere from "../../Components/Textos/Titulos";
import SubTitlePompiere from "../../Components/Textos/SubTitles";

export default function LoadingPage() {
  return (
    <View style={styles.container}>
      <TitlePompiere text={"Nome do App"}></TitlePompiere>

      <Image
        source={require("./../../../assets/Logo.png")}
        style={styles.logo}
      ></Image>

      <View>
        <TitlePompiere text={"BMWP & ASPT"}></TitlePompiere>
        <SubTitlePompiere
          text={"Biological Monitoring Working Party"}
        ></SubTitlePompiere>
        <SubTitlePompiere text={"Average Score per Taxon"}></SubTitlePompiere>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontFamily: "Pompiere_400Regular",
    fontSize: 34,
    textTransform: "uppercase",
    color: "#000",
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "Pompiere_400Regular",
    fontSize: 13,
    textTransform: "capitalize",
    color: "#909090",
  },
});
