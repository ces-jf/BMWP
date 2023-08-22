import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TopBar from "../../../Components/TopBar";
import BtnBack from "../../../Components/Buttons/Back";
import TitlePompiere from "../../../Components/Text/Title";
import SubTitlePompiere from "../../../Components/Text/SubTitles";
import LocationPlate from "../../../Components/LocationPlate";
import Span from "../../../Components/Span"

export default function HelpHomePage() {
  return (
    <View style={styles.container}>
      <TopBar>
        <BtnBack></BtnBack>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <Span></Span>
      </TopBar>
      <View>
        <LocationPlate text={"Referência Bibliográfica"}></LocationPlate>
        <SubTitlePompiere text={"Xxxx"} fontSize={30}></SubTitlePompiere>
        <Text style={styles.text}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx</Text>
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
    margin:0,
  },text :{
    width:"85%",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    margin:"auto"
  }
});
