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

export default function Bmwp2000() {
    //SCORE10
    const[taxonsScore10, setTaxonsScore10] = useState ([
        {id: 1, name: Siphlonuridae, marked: false, color: "#fff" },
        {id: 2, name: Gripopterygidae, marked: false, color: "#fff" },
        {id: 3, name: Odontoceridae, marked: false, color: "#fff" },
        {id: 4, name: Hydroscaphidae, marked: false, color: "#fff" },
        {id: 5, name: Heliocopsychidae, marked: false, color: "#fff" },
        {id: 6, name: Leptosphlebiidae, marked: false, color: "#fff" },
    ])


    //SCORE8
    const[taxonsScore8, setTaxonsscore8] = useState([
        {id:1, name: Perlidae, marked: false, color: "#fff"},
        {id:2, name: Philopotamidae, marked: false, color: "#fff"},
        {id:3, name: Psephenidae, marked: false, color: "#fff"},
        {id:4, name: Microsporidae, marked: false, color: "#fff"},
        {id:5, name: Pyralidae, marked: false, color: "#fff"},
        {id:6, name: Noctuidae, marked: false, color: "#fff"},
        {id:7, name: Calopterygidae, marked: false, color: "#fff"},
        {id:8, name: Libellulidae, marked: false, color: "#fff"},
        {id:9, name: Aeshnidae, marked: false, color: "#fff"},
        {id:10, name: Hebridae, marked: false, color: "#fff"},
        {id:11, name: Leptohyphidae, marked: false, color: "#fff"},
    ])

    //SCORE7
    const[taxonsScore7, setTaxonsScore7] = useState([
        {id:1, name: Polycentropodidae,  marked: false, color: "#fff"},
        {id:2, name: Hydrobiosidae,  marked: false, color: "#fff"}, 
        {id:3, name: Staphylinidae,  marked: false, color: "#fff"},
        {id:4, name: Coenagrionidae,  marked: false, color: "#fff"},
        {id:5, name: Veliidae,  marked: false, color: "#fff"},
        {id:6, name: Glossosomatidae,  marked: false, color: "#fff"}, 
        {id:7, name: Hydroptiliidae,  marked: false, color: "#fff"},
    ])

    //SCORE6
    const[taxonsScore6, setTaxonsScore6] = useState([
        {id:1, name: Nepiade, marked: false, color: "#fff"},
        {id:2, name: Ancylidae, marked: false, color: "#fff"},
        {id:3, name: Unionidae, marked: false, color: "#fff"},
        {id:4, name: Dixidae, marked: false, color: "#fff"},
        {id:5, name: Hydropsychidae, marked: false, color: "#fff"},
    ])
    //SCORE5
    const[taxonsScore5, setTaxonsScore5] = useState([
        {id: 1, name: Elmidae, marked: false, color: "#fff"},
        {id: 2, name: Gomphidae, marked: false, color: "#fff"},
        {id: 3, name: Naucoridae, marked: false, color: "#fff"},
        {id:4, name: Belostomatidae, marked: false, color: "#fff"},
        {id:5, name: Clorixidae, marked: false, color: "#fff"},
        {id:6, name: Mesoveliidae, marked: false, color: "#fff"},
        {id:7, name: Hydriphiliidae, marked: false, color: "#fff"},
        {id:8, name: Dugesiidae, marked: false, color: "#fff"},
        {id:9, name: Simuliidae, marked: false, color: "#fff"},
        {id:10, name: Tipulidae, marked: false, color: "#fff"},
        {id:11, name: Baetidae, marked: false, color: "#fff"},
    ])
    //SCORE4
    const[taxonsScore4, setTaxonsScore4] = useState([
    {id:1, name: Dysticidae, marked: false, color: "#fff"},
    {id:2, name: Chrysomelidae, marked: false, color: "#fff"},
    {id:3, name: Corydalidae, marked: false, color: "#fff"},
    {id:5, name: Psicocolidae, marked: false, color: "#fff"},
    {id:4, name: Ceratopogonidae, marked: false, color: "#fff"},
    {id:5, name: Empidoidea, marked: false, color: "#fff"},
    {id:6, name: CGelastocoridae, marked: false, color: "#fff"},
    ])
    //SCORE3
    const[taxonsScore3, setTaxonsScore3] = useState([
    {id:1, name: Physidae, marked: false, color: "#fff"},
    {id:2, name: Planorbidae, marked: false, color: "#fff"},
    {id:3, name: Sphariidae, marked: false, color: "#fff"},
    {id:4, name: Glossiphoniidae, marked: false, color: "#fff"},
    {id:5, name: Atharicdae, marked: false, color: "#fff"},
    {id:6, name: Tabanidae, marked: false, color: "#fff"},
    {id:7, name: Erpobdeliidae, marked: false, color: "#fff"}
    ])

    //SCORE2
    const[taxonsScore2, setTaxonsScore2] = useState([
    {id:1, name: Chironomidae, marked: false, color: "#fff"},
    {id:2, name: Psychodidae, marked: false, color: '#fff'},
    {id:3, name: Stratiomyidae, marked: false, color: '#fff'},
    {id:4, name: Syrphidae, marked: false, color: '#fff'},
    {id:5, name: Ephirdae, marked: false, color: '#fff'},
    ])
    //SCORE1
    const[taxonsScore1, setTaxonsScore1] = useState([
    {id:1, name: Oligochaeta, marked: false, color: '#fff'},
    {id:2, name: Sciomyzidae, marked: false, color: '#fff'},
    {id:3, name: Culicidae, marked: false, color: '#fff'},
    ])

    //Função para marcação de score
  const toggleMarked = (item, taxonScore, setScoreLocation, itemScoreValue) => {
    const updatedTaxons = taxonScore.map((taxon) => {
      if (taxon.id === item.id) {
        taxon.color = taxon.color === "#438CFA" ? "#FA6F5C" : "#438CFA";

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
  };
  const [pontuacao, setPonto] = useState(0);

  return (
    <View style={styles.container}>
      <Bar>
        <Span></Span>
        <TitlePompiere
          text={"Junqueira 𝑒𝑡 𝑎𝑙., 2000"}
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
  )};


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
