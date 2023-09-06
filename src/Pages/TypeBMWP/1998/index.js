import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Bar from "../../../Components/Bar";
import TitlePompiere from "../../../Components/Text/Title";
import ButtonsSelect from "../../../Components/BarButtons";
import Span from "../../../Components/Span";

export default function Bmwp1998() {

//SCORE 10
  const [taxonsScore10, setTaxonsScore10] = useState([
    { id: "1", name: "Siphlonuridae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "2", name: "Gripopterygidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "3", name: "Pyralidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "4", name: "Odontoceridae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "5", name: "Hydroscaphidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "6", name: "Helicopsychidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },

  ]);

//SCORE 8
  const [taxonsScore8, setTaxonsScore8] = useState([
    { id: "1", name: "Leptophlebiidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "2", name: "Perlidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "3", name: "Hebridae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "4", name: "Hydrobiosidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "5", name: "Philopotamidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "6", name: "Calopterygidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "7", name: "Psephenidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "8", name: "Dixidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },

  ]);
 
//SCORE 7
  const [taxonsScore7, setTaxonsScore7] = useState([
    { id: "1", name: "Leptohyphidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "2", name: "Veliidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "3", name: "Leptoceridae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "4", name: "Polycentropodidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },

  ]);

//SCORE 6
  const [taxonsScore6, setTaxonsScore6] = useState([
    { id: "1", name: "Glossosomatidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "2", name: "Hydroptilidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "3", name: "Gyrinidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "4", name: "Coenagrionidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "5", name: "Ancylidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  
  ]);

//SCORE 5
  const [taxonsScore5, setTaxonsScore5] = useState([
    { id: "1", name: "Naucoridae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "2", name: "Belostomatidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "3", name: "Corixidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "4", name: "Nepidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "5", name: "Hydropsychidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "6", name: "Gomphidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "7", name: "Libellulidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "8", name: "Dysticidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "9", name: "Corydalidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "10", name: "Dugesiidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "11", name: "Simuliidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  
  ]);
  
//SCORE 4
  const [taxonsScore4, setTaxonsScore4] = useState([
    { id: "1", name: "Baetidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "2", name: "Elmidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "3", name: "Hydrophilidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "4", name: "Piscicolidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "5", name: "Athericidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "6", name: "Empidoidea", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  { id: "7", name: "Tabanidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },

  ]);

//SCORE 3
  const [taxonsScore3, setTaxonsScore3] = useState([
    { id: "1", name: "Physidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "2", name: "Planorbidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "3", name: "Sphaeriidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "4", name: "Glossiphoniidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "5", name: "Ceratopogonidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "6", name: "Tipulidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "7", name: "Culicidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  
  ]);
 
//SCORE 2
  const [taxonsScore2, setTaxonsScore2] = useState([
    { id: "1", name: "Erpobdeliidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "2", name: "Chironomidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "3", name: "Psychodidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "4", name: "Stratiomyidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
    { id: "5", name: "Erpobdeliidae", marked: false, color: "#fff", image: require("./../../../../assets/warn.png") },
  
  ]);
 
//SCORE 1
  const [taxonsScore1, setTaxonsScore1] = useState([
    { id: "1", name: "Oligochaeta", marked: false, color: "#fff" },
  ]);

//Função para marcação de score
  const toggleMarked = (item,taxonScore,setScoreLocation,itemScoreValue) => {
    const updatedTaxons = taxonScore.map((taxon) => {
      if (taxon.id === item.id) {

        taxon.color = taxon.color === "#438CFA" ? "#FA6F5C" : "#438CFA"

        return { ...taxon, marked: !taxon.marked };
      }
      return taxon;
    });

    setScoreLocation(updatedTaxons);

    if (item.marked === false) {
      setPonto(pontuacao + itemScoreValue);
    } else {
      setPonto(pontuacao - itemScoreValue);
    }
  }
  const [pontuacao, setPonto] = useState(0);

  return (
    <View style={styles.container}>
      <Bar>
        <TitlePompiere text={"Junqueira & Campo 1998"} color={"#fff"}></TitlePompiere>
        <ButtonsSelect typeButton={"btnHelp"}></ButtonsSelect>
      </Bar>

      <ScrollView style={{ margin: 15 }}>

        <TitlePompiere text={"Score 10"}></TitlePompiere>
        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore10}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore10,setTaxonsScore10,10)}
              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button,
                    {
                      backgroundColor: "#fff",
                    },
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 8"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore8}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore8,setTaxonsScore8,8)}

              >
               <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 7"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore7}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore7,setTaxonsScore7,7)}

              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 6"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore6}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore6,setTaxonsScore6,6)}

              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 5"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore5}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore5,setTaxonsScore5,5)}

              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 4"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore4}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore4,setTaxonsScore4,4)}

              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 3"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore3,setTaxonsScore3,3)}

              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 2"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore2,setTaxonsScore2,2)}

              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>

        <TitlePompiere text={"Score 1"}></TitlePompiere>

        <FlatList
          style={{ marginBottom: 30 }}
          data={taxonsScore1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.containerForCheck,
                { backgroundColor: item.color },
              ]}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => toggleMarked(item,taxonsScore1,setTaxonsScore1,1)}
              >
                <Image
                source={item.color === "#fff" ? require("../../../../assets/warn.png"): require("../../../../assets/ok.png")}
                  style={[
                    styles.button
                  ]}
                ></Image>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </ScrollView>
      <Bar>
        <ButtonsSelect typeButton={"btnBack"}></ButtonsSelect>
        <ButtonsSelect typeButton={"btnHome"}></ButtonsSelect>
        <ButtonsSelect typeButton={"btnGo"} page={"ScorePage"} ></ButtonsSelect>
      </Bar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    backgroundColor: "#fff",
  },
  containerForCheck: {
    minWidth: "100%",

    marginTop: 15,
    padding: 10,

    borderRadius: 15,
    borderBottomWidth: 2,
    borderColor: "#D2DCE3",
  },
  button: {
    width: 40,
    height: 40,
    marginRight: "3%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",

    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: "#000",
  },
  text: {
    padding: 6,
    borderRadius: 5,

    fontSize: 16,
    textAlignVertical: "center",
  },
});
