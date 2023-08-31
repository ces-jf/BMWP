import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Span from "../../Components/Span";
import Bar from "../../Components/Bar";
import ButtonsSelect from "../../Components/BarButtons";
import TitlePompiere from "../../Components/Text/Title";
import LocationPlate from "../../Components/LocationPlate";
import SubTitlePompiere from "../../Components/Text/SubTitles";

export default function HelpPage() {
  return (
    <View style={styles.container}>
      <Bar>
        <Span></Span>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <Span></Span>
      </Bar>

      <LocationPlate text={"Referência Bibliográfica"}></LocationPlate>

      <ScrollView style={styles.scroll}>
        <SubTitlePompiere text={"Mazilão, Gabriel"} fontSize={30}/>
        <Text style={styles.text}>
          Mazilão, G.(2023). Livro: Como ter um bigode de respeito. Estudante de
          Engenharia bigodal, traz os segredos de um bigode perfeito
        </Text>

        <Span></Span>

        <SubTitlePompiere text={"Meireles, Jhonathan"} fontSize={30}/>
        <Text style={styles.text}>
          Jhonathan, M.(2023). Livro: faturando Bitcoin, aprenda com o sheik que
          conquistou seu primeiro trilhão de dollares em 7 minutos
        </Text>

        <Span></Span>

        <SubTitlePompiere text={"Monteiro, Gabriel"} fontSize={30}/>
        <Text style={styles.text}>
          Monteiro, G.(2023). Livro: O goleiro que nunca tomou gol. Descubra o
          segredo da cadeira de massagem
        </Text>

        <Span></Span>

        <SubTitlePompiere text={"Sobreira, Gustavo"} fontSize={30}/>
        <Text style={styles.text}>
          Sobreira, G. P. (2023). Livro: Tavares talentoso, trabalhando trouxe
          tomate, trigo, talheres, teve também tinto tanto tomou, tivera todo
          tonto
        </Text>
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
  container: {
    alignItems: "flex-start",
    alignContent: "center",
    flexDirection: "column",

    width: "100%",
    height: "100%",

    backgroundColor: "#fff",
  },
  scroll: {
    margin: 30,
  },
  text: {
    minWidth: "100%",
    maxWidth: "100%",

    alignItems: "flex-start",
  },
});
