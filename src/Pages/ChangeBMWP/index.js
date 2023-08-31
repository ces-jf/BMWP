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
      <ScrollView>

{/* TODO adicionar mais custumizações nestes botões, para cada tipo de método de avaliação */}
        <Span></Span>
        <BtnNavigate text={"Armitage et al. – 1983"}></BtnNavigate>
        <BtnNavigate text={"Junqueira & Campos - 1998"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2000"}></BtnNavigate>
        <BtnNavigate text={"Junqueira et al. – 2018"}></BtnNavigate>

      </ScrollView>

      <Bar>
        <ButtonsSelect typeButton={"btnBack"}></ButtonsSelect>
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
  }
});
