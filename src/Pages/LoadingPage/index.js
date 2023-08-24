import React from "react";
import { StyleSheet, View, Image } from "react-native";

import TitlePompiere from "../../Components/Text/Title";
import SubTitlePompiere from "../../Components/Text/SubTitles";

export default function LoadingPage() {
  return (
    <View style={styles.container}>
      
      <TitlePompiere text={"Nome do App"}></TitlePompiere>

      <Image
        source={require("./../../../assets/Logo.png")}
      ></Image>

      <View>

        <TitlePompiere text={"BMWP & ASPT"}></TitlePompiere>

        <SubTitlePompiere text={"Biological Monitoring Working Party"}></SubTitlePompiere>
        <SubTitlePompiere text={"Average Score per Taxon"}></SubTitlePompiere>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    height: "100%",
    width: "100%",

    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    
    backgroundColor: "#fff",
  }
});
