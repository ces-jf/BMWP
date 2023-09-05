//React
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

//Local
import Bar from "../../Components/Bar";
import ButtonsSelect from "../../Components/BarButtons";
import BtnNavigate from "../../Components/Buttons/Navigate";
import LocationPlate from "../../Components/LocationPlate";
import Span from "../../Components/Span"
import TitlePompiere from "../../Components/Text/Title";

export default function ChangeBMWP() {
  return (
    <View style={styles.containerPage}>
      <Bar>
        <Span></Span>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <ButtonsSelect typeButton={"btnHelp"}></ButtonsSelect>
      </Bar>

      <LocationPlate text={"Tipo de pesquisa"}></LocationPlate>
      <ScrollView contentContainerStyle={styles.scroll}>

        <BtnNavigate text={"Armitage et al. – 1983"} location={"Bmwp1983"} color={"#699EBF"}></BtnNavigate>
        <BtnNavigate text={"Junqueira & Campos - 1998"} location={"Bmwp1998"}      color={"#025373"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2000"} location={""}        color={"#699EBF"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2018"} location={""}        color={"#025373"}></BtnNavigate>

      </ScrollView>

      <Bar>
        <Span></Span>
        <ButtonsSelect typeButton={"btnHome"}></ButtonsSelect>
        <Span></Span>
      </Bar>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    alignItems: "flex-start",
    alignContent: "center",
    flexDirection: "column",

    height: "100%",
    width: "100%",

    backgroundColor: "#fff",
  },scroll:{
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",

  }
});
