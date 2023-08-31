//React
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";

import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

//Local
import Bar from "../../Components/Bar";
import ButtonsSelect from "../../Components/BarButtons";
import LocationPlate from "../../Components/LocationPlate";
import Span from "../../Components/Span";
import TextInputExample from "../../Components/Input";
import TitlePompiere from "../../Components/Text/Title";

export default function RegisterPage() {
  const [coletores, setColetores] = useState([""]);
  const createNewColetor = () => {
    setColetores([...coletores, ""]);
  };

  return (
    <View style={styles.containerPage}>
      <Bar>
        <Span></Span>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <ButtonsSelect typeButton={"btnHelp"}></ButtonsSelect>
      </Bar>

      <LocationPlate text={"Informações"}></LocationPlate>

      <ScrollView
        id="info"
        style={styles.containerInputs}
        showsVerticalScrollIndicator={false}
      >
        <TextInputExample
          textForLabel={"Cidade"}
          placeholder={"Juiz de Fora"}
          value={""}
          marginBot={30}
        >
          <Icon name="location-pin" size={50} color={"#FA0900"} />
        </TextInputExample>

        <TextInputExample
          textForLabel={"Riacho"}
          placeholder={"Paraibuna"}
          value={""}
          marginBot={30}
        >
          <Icon name="water" size={50} color={"#6C89FA"} />
        </TextInputExample>

        <TextInputExample
          textForLabel={"Data"}
          placeholder={"25-15-2023"}
          keyboardType={"numeric"}
          value={""}
          marginBot={30}
        >
          <Icon name="calendar" size={50} color={"#D4370B"} />
        </TextInputExample>

        {coletores.map((coletor, index) => (
          <TextInputExample
            key={index}
            textForLabel={"Coletor n°" + (index + 1)}
            placeholder={"Novo coletor"}
            value={coletor}
            marginBot={30}
          >
            <Icon name="user" size={50} color={"#000"} />
          </TextInputExample>
        ))}

        <TouchableOpacity
          onPress={createNewColetor}
          style={styles.btnNewColector}
        >
          <Icon name={"plus"} size={50} color="#000" />
        </TouchableOpacity>
      </ScrollView>

      <Bar>
        <Span></Span>
        <ButtonsSelect typeButton={""}></ButtonsSelect>
        <ButtonsSelect typeButton={"btnGo"} page={"ChangeBMWP"}></ButtonsSelect>
      </Bar>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    alignItems: "flex-start",
    flexDirection: "column",

    height: "100%",
    width: "100%",

    backgroundColor: "#fff",
  },
  containerInputs: {
    height: "100%",
    margin: 15,
    marginBottom: 5,
  },

  btnNewColector: {
    maxHeight: "100%",

    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",

    borderWidth: 0.5,
    borderBottomWidth: 4,

    borderRadius: 10,
    borderColor: "#748A96",

    borderRadius: 10,
    backgroundColor: "#C8FAC0",
  },
  tabArea: {
    width: "100%",
    height: 50,

    backgroundColor: "#rgba(208, 179, 179, 0.35)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  btnTabGo: {
    width: 40,
    height: 40,

    marginRight: 30,

    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
