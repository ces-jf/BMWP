import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

import BtnHelp from "../../Components/Buttons/Help";
import TitlePompiere from "../../Components/Text/Title";
import TopBar from "../../Components/TopBar";
import BtnHome from "../../Components/Buttons/Home";
import LocationPlate from "../../Components/LocationPlate";
import TextInputExample from "./Input";

export default function RegisterPage() {
  const [coletores, setColetores] = useState([]); // Estado para armazenar os coletores

  const createNewColetor = () => {
    setColetores([...coletores, ""]); // Adicionar um novo coletor vazio ao estado
  };

  const navigate = useNavigation();
  function goToScore(){
    navigate.navigate("ScorePage")
  };
  return (
    <View style={styles.container}>
      <TopBar>
        <BtnHome></BtnHome>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <BtnHelp></BtnHelp>
      </TopBar>

      <LocationPlate text={"Informações"}></LocationPlate>

      <ScrollView id="info" style={styles.inputs}>
        <TextInputExample
          textForLabel={"Cidade"}
          placeholder={"Juiz de Fora"}
          value={""}
          marginBot={30}
        />
        <TextInputExample
          textForLabel={"Riacho"}
          placeholder={"Paraibuna"}
          value={""}
          marginBot={30}
        />
        <TextInputExample
          textForLabel={"Data"}
          placeholder={"25-15-2023"}
          keyboardType={"numeric"}
          value={""}
          marginBot={30}
        />
        <TextInputExample
          textForLabel={"Coletor"}
          placeholder={"João Silva"}
          value={""}
          marginBot={30}
        />

        {coletores.map((coletor, index) => (
          <TextInputExample
            key={index}
            textForLabel={"Coletor"}
            placeholder={"Novo coletor"}
            value={coletor}
            marginBot={30}
          />
        ))}

        <TouchableOpacity onPress={createNewColetor} style={styles.button}>
          <Image source={require("../../../assets/More.png")} />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.buttonArea}>
        <TouchableOpacity onPress={goToScore} style={styles.buttonGo}>
          <Image source={require("../../../assets/Arrow2.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "column",

    height: "100%",
    width: "100%",

    backgroundColor: "#fff",
  },

  inputs: {
    height: "100%",

    margin: 30,
  },

  button: {
    padding: 30,

    height: 40,

    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",

    borderRadius: 10,
    backgroundColor: "#C8FAC0",
  },
  buttonArea: {
    width: "100%",
    height: 60,

    marginBottom:5,

    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonGo: {

    marginRight:30,
    width:60,
    flexDirection:"row",
    alignContent: "center",
    alignItems: "center",
    justifyContent:"center",

    height:"100%",
    borderRadius: 100,
    backgroundColor: "#C0E5FA",
    
  },}
);
