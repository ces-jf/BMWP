import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import BtnHelp from "../../Components/Buttons/Help";
import TitlePompiere from "../../Components/Text/Title";
import Bar from "../../Components/Bar";
import Span from "../../Components/Span";
import BtnGo from "../../Components/Buttons/Go";
import LocationPlate from "../../Components/LocationPlate";
import TextInputExample from "../../Components/Input";

export default function RegisterPage() {
  const [coletores, setColetores] = useState([]); // Estado para armazenar os coletores

  const createNewColetor = () => {
    setColetores([...coletores, ""]); // Adicionar um novo coletor vazio ao estado
  };

  const navigate = useNavigation();
  function goToChangeBMWP() {
    navigate.navigate("ChangeBMWP");
  }
  return (
    <View style={styles.container}>
      <Bar>
        <Span></Span>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
        <BtnHelp s></BtnHelp>
      </Bar>

      <LocationPlate text={"Informações"}></LocationPlate>

      <ScrollView id="info" style={styles.containerInputs} showsVerticalScrollIndicator={false}>
        <TextInputExample
          textForLabel={"Cidade"}
          placeholder={"Juiz de Fora"}
          value={""}
          marginBot={30}
        >
          <Image
            source={require("./../../../assets/city.png")}
            style={{ width: 50, height: 50 }}
          ></Image>
        </TextInputExample>

        <TextInputExample
          textForLabel={"Riacho"}
          placeholder={"Paraibuna"}
          value={""}
          marginBot={30}
        >
          <Image
            source={require("./../../../assets/rio.png")}
            style={{ width: 50, height: 50 }}
          ></Image>
        </TextInputExample>

        <TextInputExample
          textForLabel={"Data"}
          placeholder={"25-15-2023"}
          keyboardType={"numeric"}
          value={""}
          marginBot={30}
        >
          <Image
            source={require("./../../../assets/calendario.png")}
            style={{ width: 50, height: 50 }}
          ></Image>
        </TextInputExample>

        <TextInputExample
            textForLabel={"Coletor n°1"}
            placeholder={"João Silva"}
            value={""}
            marginBot={30}
          >
            <Image
              source={require("./../../../assets/explorador.png")}
              style={{ width: 50, height: 50 }}
            ></Image>
          </TextInputExample>

        {coletores.map((coletor, index) => (
          <TextInputExample
            key={index}
            textForLabel={"Coletor n°" + (index + 2)}
            placeholder={"Novo coletor"}
            value={coletor}
            marginBot={30}
          >
            <Image
              source={require("./../../../assets/explorador.png")}
              style={{ width: 50, height: 50 }}
            ></Image>
          </TextInputExample>
        ))}

        <TouchableOpacity onPress={createNewColetor} style={styles.btnNewColector}>
          <Image source={require("../../../assets/More.png")} />
        </TouchableOpacity>
      </ScrollView>

      <Bar>
        <Span></Span>
        <Span></Span>
        <Span></Span>
        <BtnGo pageGo={"ChangeBMWP"}></BtnGo>
      </Bar>
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
  containerInputs: {
    height: "100%",
    margin: 15,
    marginBottom:5
  },

  btnNewColector: {
    padding: 30,
    height: 40,

    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",

    borderWidth: 0.5,
    borderBottomWidth: 4,

    borderRadius: 10,
    borderColor: "#999",

    borderRadius: 10,
    backgroundColor: "#C8FAC0",
  },
  tabArea: {
    width: "100%",
    height: 50,

    backgroundColor:"#rgba(208, 179, 179, 0.35)",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "flex-end",
  },

  btnTabGo: {
    width: 40,
    height:40,
    
    marginRight: 30,
    
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",

  },
});
