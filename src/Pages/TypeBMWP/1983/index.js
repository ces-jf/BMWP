import React, { useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Bar from "../../../Components/Bar";
import TitlePompiere from "../../../Components/Text/Title";
import ButtonsSelect from "../../../Components/BarButtons";

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

  function toggleMarked(item) {
    const updatedTaxons = taxonsScore10.map((taxon) => {
      if (taxon.id === item.id) {
        if (taxon.color === "#438CFA") {
          taxon.color = "#FA6F5C";
        } else {
          taxon.color = "#438CFA";
        }
        return { ...taxon, marked: !taxon.marked };
      }
      return taxon;
    });

    setTaxonsScore10(updatedTaxons);

    if (item.marked === false) {
      setPonto(pontuacao + 10);
    } else {
      setPonto(pontuacao - 10);
    }
  }

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
  function toggleMarked8(item) {
    const updatedTaxons = taxonsScore8.map((taxon) => {
      if (taxon.id === item.id) {
        if (taxon.color === "#438CFA") {
          taxon.color = "#FA6F5C";
        } else {
          taxon.color = "#438CFA";
        }
        return { ...taxon, marked: !taxon.marked };
      }
      return taxon;
    });

    setTaxonsScore8(updatedTaxons);

    if (item.marked === false) {
      setPonto(pontuacao + 8);
    } else {
      setPonto(pontuacao - 8);
    }
  }

  //SCORE 7
  const [taxonsScore7, setTaxonsScore7] = useState([
    { id: "1", name: "Caenidae", marked: false, color: "#fff" },
    { id: "2", name: "Nemouridae", marked: false, color: "#fff" },
    { id: "3", name: "Rhyacophilidae", marked: false, color: "#fff" },
    { id: "4", name: "Polycentropodidae", marked: false, color: "#fff" },
    { id: "5", name: "Limnephilidae", marked: false, color: "#fff" },
  ]);
  function toggleMarked7(item) {
    const updatedTaxons = taxonsScore7.map((taxon) => {
      if (taxon.id === item.id) {
        if (taxon.color === "#438CFA") {
          taxon.color = "#FA6F5C";
        } else {
          taxon.color = "#438CFA";
        }
        return { ...taxon, marked: !taxon.marked };
      }
      return taxon;
    });

    setTaxonsScore7(updatedTaxons);

    if (item.marked === false) {
      setPonto(pontuacao + 7);
    } else {
      setPonto(pontuacao - 7);
    }
  }

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
  function toggleMarked6(item) {
    const updatedTaxons = taxonsScore6.map((taxon) => {
      if (taxon.id === item.id) {
        if (taxon.color === "#438CFA") {
          taxon.color = "#FA6F5C";
        } else {
          taxon.color = "#438CFA";
        }
        return { ...taxon, marked: !taxon.marked };
      }
      return taxon;
    });

    setTaxonsScore6(updatedTaxons);

    if (item.marked === false) {
      setPonto(pontuacao + 6);
    } else {
      setPonto(pontuacao - 6);
    }
  }


   //SCORE 5
   const [taxonsScore5, setTaxonsScore5] = useState([
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
  function toggleMarked5(item) {
    const updatedTaxons = taxonsScore5.map((taxon) => {
      if (taxon.id === item.id) {
        if (taxon.color === "#438CFA") {
          taxon.color = "#FA6F5C";
        } else {
          taxon.color = "#438CFA";
        }
        return { ...taxon, marked: !taxon.marked };
      }
      return taxon;
    });

    setTaxonsScore5(updatedTaxons);

    if (item.marked === false) {
      setPonto(pontuacao + 5);
    } else {
      setPonto(pontuacao - 5);
    }
  }


  const [pontuacao, setPonto] = useState(0);

  return (
    <View style={styles.container}>
      <Bar>
        <ButtonsSelect typeButton={"btnHome"}></ButtonsSelect>
        <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
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
                onPress={() => toggleMarked(item)}
              >
                <Text
                  style={[
                    styles.button,
                    {
                      backgroundColor: "#fff",
                    },
                  ]}
                ></Text>
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
                onPress={() => toggleMarked8(item)}
              >
                <Text
                  style={[
                    styles.button,
                    {
                      backgroundColor: "#fff",
                    },
                  ]}
                ></Text>
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
                onPress={() => toggleMarked7(item)}
              >
                <Text
                  style={[
                    styles.button,
                    {
                      backgroundColor: "#fff",
                    },
                  ]}
                ></Text>
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
        onPress={() => toggleMarked6(item)}
      >
        <Text
          style={[
            styles.button,
            {
              backgroundColor: "#fff",
            },
          ]}
        ></Text>
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
        onPress={() => toggleMarked5(item)}
      >
        <Text
          style={[
            styles.button,
            {
              backgroundColor: "#fff",
            },
          ]}
        ></Text>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )}
></FlatList>

        <Text> {pontuacao}</Text>
      </ScrollView>
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
