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

export default function Bmwp1983() {  
  //SCORE 10
  const [taxonsScore10, setTaxonsScore10] = useState([
    { id: "1", name: "Slphlonuridae", marked: false, color: "#fff" },
    { id: "2", name: "Heptageniidae", marked: false, color: "#fff" },
    { id: "3", name: "Leptophlebiidae", marked: false, color: "#fff" },
    { id: "4", name: "Ephemerellidae", marked: false, color: "#fff" },
    { id: "5", name: "Potamanthidae", marked: false, color: "#fff" },
    { id: "6", name: "Ephemeridae", marked: false, color: "#fff" },
    { id: "7", name: "Taeniopterygidae", marked: false, color: "#fff" },
    { id: "8", name: "Leuctridae", marked: false, color: "#fff" },
    { id: "9", name: "Capniidae", marked: false, color: "#fff" },
    { id: "10", name: "Pelodidae", marked: false, color: "#fff" },
    { id: "11", name: "Perlidae", marked: false, color: "#fff" },
    { id: "12", name: "Chloroperlidae", marked: false, color: "#fff" },
    { id: "13", name: "Aphelocheiridae", marked: false, color: "#fff" },
    { id: "14", name: "Phryganeidae", marked: false, color: "#fff" },
    { id: "15", name: "Molannidae", marked: false, color: "#fff" },
    { id: "16", name: "Beraeridae", marked: false, color: "#fff" },
    { id: "17", name: "Odontoceridae", marked: false, color: "#fff" },
    { id: "18", name: "Leptoceridae", marked: false, color: "#fff" },
    { id: "19", name: "Goeridae", marked: false, color: "#fff" },
    { id: "20", name: "Lepidostomatidae", marked: false, color: "#fff" },
    { id: "21", name: "Brachycentridae", marked: false, color: "#fff" },
    { id: "22", name: "Sericostomatidae", marked: false, color: "#fff" },
  ]);

  //SCORE 8
  const [taxonsScore8, setTaxonsScore8] = useState([
    { id: "1", name: "Astacidae", marked: false, color: "#fff" },
    { id: "2", name: "Lestidae", marked: false, color: "#fff" },
    { id: "3", name: "Agriidae", marked: false, color: "#fff" },
    { id: "4", name: "Gomphidae", marked: false, color: "#fff" },
    { id: "5", name: "Cordulegasteridae", marked: false, color: "#fff" },
    { id: "6", name: "Aeshnidae", marked: false, color: "#fff" },
    { id: "7", name: "Corduliidae", marked: false, color: "#fff" },
    { id: "8", name: "Libellulidae", marked: false, color: "#fff" },
    { id: "9", name: "Psychomyiidae", marked: false, color: "#fff" },
    { id: "10", name: "Philopotamidae", marked: false, color: "#fff" },
  ]);

  //SCORE 7
  const [taxonsScore7, setTaxonsScore7] = useState([
    { id: "1", name: "Caenidae", marked: false, color: "#fff" },
    { id: "2", name: "Nemouridae", marked: false, color: "#fff" },
    { id: "3", name: "Rhyacophilidae", marked: false, color: "#fff" },
    { id: "4", name: "Polycentropodidae", marked: false, color: "#fff" },
    { id: "5", name: "Limnephilidae", marked: false, color: "#fff" },
  ]);

  //SCORE 6
  const [taxonsScore6, setTaxonsScore6] = useState([
    { id: "1", name: "Neritidae", marked: false, color: "#fff" },
    { id: "2", name: "Viviparidae", marked: false, color: "#fff" },
    { id: "3", name: "Ancylidae", marked: false, color: "#fff" },
    { id: "4", name: "Hydroptilidae", marked: false, color: "#fff" },
    { id: "5", name: "Umonidae", marked: false, color: "#fff" },
    { id: "6", name: "Corophiidae", marked: false, color: "#fff" },
    { id: "7", name: "Gammaridae", marked: false, color: "#fff" },
    { id: "8", name: "Platyenemididae", marked: false, color: "#fff" },
    { id: "9", name: "Coenagrionidae", marked: false, color: "#fff" },
  ]);

  //SCORE 5
  const [taxonsScore5, setTaxonsScore5] = useState([
    { id: "1", name: "Mesoveliidae", marked: false, color: "#fff" },
    { id: "2", name: "Hydrometridae", marked: false, color: "#fff" },
    { id: "3", name: "Gerridae", marked: false, color: "#fff" },
    { id: "4", name: "Nepidae", marked: false, color: "#fff" },
    { id: "5", name: "Naucoridae", marked: false, color: "#fff" },
    { id: "6", name: "Notonectidae", marked: false, color: "#fff" },
    { id: "7", name: "Pleidae", marked: false, color: "#fff" },
    { id: "8", name: "Corixidae", marked: false, color: "#fff" },
    { id: "9", name: "Haliplidae", marked: false, color: "#fff" },
    { id: "10", name: "Hygrobiidae", marked: false, color: "#fff" },
    { id: "11", name: "Dytiscidae", marked: false, color: "#fff" },
    { id: "12", name: "Gyrinidae", marked: false, color: "#fff" },
    { id: "13", name: "Hydrophilidae", marked: false, color: "#fff" },
    { id: "14", name: "Clambidae", marked: false, color: "#fff" },
    { id: "15", name: "Helodidae", marked: false, color: "#fff" },
    { id: "16", name: "Dryopidae", marked: false, color: "#fff" },
    { id: "17", name: "Elminthidae", marked: false, color: "#fff" },
    { id: "18", name: "Chrysomelidae", marked: false, color: "#fff" },
    { id: "19", name: "Curculionidae", marked: false, color: "#fff" },
    { id: "20", name: "Hydropsychidae", marked: false, color: "#fff" },
    { id: "21", name: "Tlpulidae", marked: false, color: "#fff" },
    { id: "22", name: "Simuliidae", marked: false, color: "#fff" },
  ]);

  //SCORE 4
  const [taxonsScore4, setTaxonsScore4] = useState([
    { id: "1", name: "Baetidae", marked: false, color: "#fff" },
    { id: "2", name: "Sialidae", marked: false, color: "#fff" },
    { id: "3", name: "Piscicolidae", marked: false, color: "#fff" },
  ]);

  //SCORE 3
  const [taxonsScore3, setTaxonsScore3] = useState([
    { id: "1", name: "Valvatidae", marked: false, color: "#fff" },
    { id: "2", name: "Hydrobiidae", marked: false, color: "#fff" },
    { id: "3", name: "Lymnaeidae", marked: false, color: "#fff" },
    { id: "4", name: "Physidae", marked: false, color: "#fff" },
    { id: "5", name: "Planorbidae", marked: false, color: "#fff" },
    { id: "6", name: "Sphaeriidae", marked: false, color: "#fff" },
    { id: "7", name: "Glossiphonidae", marked: false, color: "#fff" },
    { id: "8", name: "Hirudinae", marked: false, color: "#fff" },
    { id: "9", name: "Erpobdeliidae", marked: false, color: "#fff" },
    { id: "10", name: "Asellidae", marked: false, color: "#fff" },
  ]);

  //SCORE 2
  const [taxonsScore2, setTaxonsScore2] = useState([
    { id: "1", name: "Chironomidae", marked: false, color: "#fff" },
  ]);

  //SCORE 1
  const [taxonsScore1, setTaxonsScore1] = useState([
    { id: "1", name: "Oligochaeta", marked: false, color: "#fff" },
  ]);

  //Função para marcação de score
  const toggleMarked = (item, taxonScore, setScoreLocation, itemScoreValue) => {
    const updatedTaxons = taxonScore.map((taxon) => {
      if (taxon.id === item.id) {
        taxon.color = taxon.color === "#438CFA" ? "#FA6F5C" : "#438CFA";

        return { ...taxon, marked: !taxon.marked };
      }
      return taxon;
    });

    const [pontuacao, setPonto] = useState(0);

    setScoreLocation(updatedTaxons);

    if (item.marked === false) {
      setPonto(pontuacao + itemScoreValue);
    } else {
      setPonto(pontuacao - itemScoreValue);
    }
  };
  

  return (
    <View style={styles.container}>
      <Bar>
        <Span></Span>
        <TitlePompiere
          text={"Armitage 𝑒𝑡 𝑎𝑙., 1983"}
          size={25}
          color={"#fff"}
        ></TitlePompiere>
        <ButtonsSelect typeButton={"btnHelp"}></ButtonsSelect>
      </Bar>

      <ScrollView style={{ margin: 0 }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "#b9ffff", padding: 15 }}>
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
                  onPress={() =>
                    toggleMarked(item, taxonsScore10, setTaxonsScore10, 10)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
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
        </View>

        <View style={{ backgroundColor: "#a0f9e6", padding: 15 }}>
          <TitlePompiere text={"Score 8"} color={"#1c1c1c"}></TitlePompiere>
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
                  onPress={() =>
                    toggleMarked(item, taxonsScore8, setTaxonsScore8, 8)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ backgroundColor: "#7ee6d1", padding: 15 }}>
          <TitlePompiere text={"Score 7"} color={"#383838"}></TitlePompiere>

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
                  onPress={() =>
                    toggleMarked(item, taxonsScore7, setTaxonsScore7, 7)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ backgroundColor: "#5cb3bc", padding: 15 }}>
          <TitlePompiere text={"Score 6"} color={"#555555"}></TitlePompiere>

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
                  onPress={() =>
                    toggleMarked(item, taxonsScore6, setTaxonsScore6, 6)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ backgroundColor: "#388fa7", padding: 15 }}>
          <TitlePompiere text={"Score 5"} color={"#dddddd"}></TitlePompiere>

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
                  onPress={() =>
                    toggleMarked(item, taxonsScore5, setTaxonsScore5, 5)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ backgroundColor: "#165c92", padding: 15 }}>
          <TitlePompiere text={"Score 4"} color={"#dddddd"}></TitlePompiere>

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
                  onPress={() =>
                    toggleMarked(item, taxonsScore4, setTaxonsScore4, 4)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ backgroundColor: "#125283", padding: 15 }}>
          <TitlePompiere text={"Score 3"} color={"#dddddd"}></TitlePompiere>

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
                  onPress={() =>
                    toggleMarked(item, taxonsScore3, setTaxonsScore3, 3)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ backgroundColor: "#0f4a74", padding: 15 }}>
          <TitlePompiere text={"Score 2"} color={"#f1f1f1"}></TitlePompiere>

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
                  onPress={() =>
                    toggleMarked(item, taxonsScore2, setTaxonsScore2, 2)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>

        <View style={{ backgroundColor: "#083057", padding: 15 }}>
          <TitlePompiere text={"Score 1"} color={"#fff"}></TitlePompiere>

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
                  onPress={() =>
                    toggleMarked(item, taxonsScore1, setTaxonsScore1, 1)
                  }
                >
                  <Image
                    source={
                      item.color === "#fff"
                        ? require("../../../../assets/warn.png")
                        : require("../../../../assets/ok.png")
                    }
                    style={[styles.button]}
                  ></Image>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>
      </ScrollView>
      <Bar>
        <ButtonsSelect typeButton={"btnBack"}></ButtonsSelect>
        <ButtonsSelect typeButton={"btnHome"}></ButtonsSelect>
        <ButtonsSelect typeButton={"btnGo"} page={"ScorePage"}></ButtonsSelect>
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
