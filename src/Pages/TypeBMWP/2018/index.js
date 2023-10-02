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

export default function Bmwp2018() {
  const [taxonsScore10, setTaxonsScore10] = useState([
    { id: "1", name: "Gripopterygidae", marked: false, color: "#fff" },
    { id: "2", name: "Perlidae", marked: false, color: "#fff" },
    { id: "3", name: "Calamoceratidae", marked: false, color: "#fff" },
    { id: "4", name: "Xiphocentronidae", marked: false, color: "#fff" },
    { id: "5", name: "Anomalopsychidae", marked: false, color: "#fff" },
    { id: "6", name: "Odontoceridae", marked: false, color: "#fff" },
    { id: "7", name: "Limnephilidae", marked: false, color: "#fff" },
    { id: "8", name: "Atriplectididae", marked: false, color: "#fff" },
    { id: "9", name: "Limnephilidae", marked: false, color: "#fff" },
    { id: "10", name: "Euthyplociidae", marked: false, color: "#fff" },
    { id: "11", name: "Oligoneuriidae", marked: false, color: "#fff" },
    { id: "12", name: "Psephenidae", marked: false, color: "#fff" },
    { id: "13", name: "Hydroscaphidae", marked: false, color: "#fff" },
    { id: "14", name: "Torridincolidae", marked: false, color: "#fff" },
    { id: "15", name: "Blephariceridae", marked: false, color: "#fff" },
    { id: "16", name: "Spongillidae", marked: false, color: "#fff" },

  ])

  const [taxonsScore8, setTaxonsScore8] = useState([
    { id: "1", name: "Glossosomatidae", marked: false, color: "#fff" },
    { id: "2", name: "Philopotamidae", marked: false, color: "#fff" },
    { id: "3", name: "Hydrobiosidae", marked: false, color: "#fff" },
    { id: "4", name: "Ecnomidae", marked: false, color: "#fff" },
    { id: "5", name: "Leptophlebiidae", marked: false, color: "#fff" },
    { id: "6", name: "Aeshnidae", marked: false, color: "#fff" },
    { id: "7", name: "Lestidae", marked: false, color: "#fff" },
    { id: "8", name: "Perilestidae", marked: false, color: "#fff" },
    { id: "9", name: "Corduliidae", marked: false, color: "#fff" },
    { id: "10", name: "Calopterygidae", marked: false, color: "#fff" },
    { id: "11", name: "Aeglidae", marked: false, color: "#fff" },
    { id: "12", name: "Hyalellidae", marked: false, color: "#fff" },
  ])

  const [taxonsScore7, setTaxonsScore7] = useState([
    { id: "1", name: "Leptoceridae", marked: false, color: "#fff" },
    { id: "2", name: "Polycentropodidae", marked: false, color: "#fff" },
    { id: "3", name: "Helicopsychidae", marked: false, color: "#fff" },
    { id: "4", name: "Leptohyphidae", marked: false, color: "#fff" },
    { id: "5", name: "Coenagrionidae", marked: false, color: "#fff" },
    { id: "6", name: "Megapodagrionidae", marked: false, color: "#fff" },
    { id: "7", name: "Protoneuridae", marked: false, color: "#fff" },
    { id: "8", name: "Libellulidae", marked: false, color: "#fff" },
    { id: "9", name: "Gomphidae", marked: false, color: "#fff" },
    { id: "10", name: "Pyralidae", marked: false, color: "#fff" },
    { id: "11", name: "Hydracarina", marked: false, color: "#fff" },

  ])

  const [taxonsScore6, setTaxonsScore6] = useState([
    { id: "1", name: "Hydroptilidae", marked: false, color: "#fff" },
    { id: "2", name: "Noteridae", marked: false, color: "#fff" },
    { id: "3", name: "Lutrochidae", marked: false, color: "#fff" },
    { id: "4", name: "Hydrochidae", marked: false, color: "#fff" },
    { id: "5", name: "Limnichidae", marked: false, color: "#fff" },
    { id: "6", name: "Hydraenidae", marked: false, color: "#fff" },
    { id: "7", name: "Dryopidae", marked: false, color: "#fff" },
    { id: "8", name: "Corydalidae", marked: false, color: "#fff" },
    { id: "9", name: "Palaemonidae", marked: false, color: "#fff" },
    { id: "10", name: "Gammaridae", marked: false, color: "#fff" },
    { id: "11", name: "Hyriidae", marked: false, color: "#fff" },
    { id: "12", name: "Mycetopodidae", marked: false, color: "#fff" },
    { id: "13", name: "Ancylidae", marked: false, color: "#fff" },
  ])

  const [taxonsScore5, setTaxonsScore5] = useState([
    { id: "1", name: "Hydropsychidae", marked: false, color: "#fff" },
    { id: "2", name: "Polymitarcyidae", marked: false, color: "#fff" },
    { id: "3", name: "Baetidae", marked: false, color: "#fff" },
    { id: "4", name: "Caenidae", marked: false, color: "#fff" },
    { id: "5", name: "Elmidae", marked: false, color: "#fff" },
    { id: "6", name: "Ampullariidae", marked: false, color: "#fff" },
    { id: "7", name: "Simuliidae", marked: false, color: "#fff" },
    { id: "8", name: "Dixidae", marked: false, color: "#fff" },
    { id: "9", name: "Empididae", marked: false, color: "#fff" },
    { id: "10", name: "Tipulidae", marked: false, color: "#fff" },
    { id: "11", name: "Limoniidae", marked: false, color: "#fff" },
    { id: "12", name: "Athericidae", marked: false, color: "#fff" },
  ])

  const [taxonsScore4, setTaxonsScore4] = useState([
    { id: "1", name: "Lampyridae", marked: false, color: "#fff" },
    { id: "2", name: "Chrysomelidae", marked: false, color: "#fff" },
    { id: "3", name: "Curculionidae", marked: false, color: "#fff" },
    { id: "4", name: "Haliplidae", marked: false, color: "#fff" },
    { id: "5", name: "Staphylinidae", marked: false, color: "#fff" },
    { id: "6", name: "Dytiscidae", marked: false, color: "#fff" },
    { id: "7", name: "Gyrinidae", marked: false, color: "#fff" },
    { id: "8", name: "Hydrophilidae", marked: false, color: "#fff" },
    { id: "9", name: "Sialidae", marked: false, color: "#fff" },
    { id: "10", name: "Ceratopogonidae", marked: false, color: "#fff" },
    { id: "11", name: "Tabanidae", marked: false, color: "#fff" },
    { id: "12", name: "Stratiomyidae", marked: false, color: "#fff" },
    { id: "13", name: "Sciomyzidae", marked: false, color: "#fff" },
    { id: "14", name: "Dolichopodidae", marked: false, color: "#fff" },
    { id: "15", name: "Lymnaeidae", marked: false, color: "#fff" },
    { id: "16", name: "Thiaridae", marked: false, color: "#fff" },
    { id: "17", name: "Corbiculidae", marked: false, color: "#fff" },
    { id: "18", name: "Mytilidae", marked: false, color: "#fff" },
    { id: "19", name: "Dugesiidae", marked: false, color: "#fff" },
  ])

  const [taxonsScore3, setTaxonsScore3] = useState([
    { id: "1", name: "Nepidae", marked: false, color: "#fff" },
    { id: "2", name: "Hydrometridae", marked: false, color: "#fff" },
    { id: "3", name: "Belostomatidae", marked: false, color: "#fff" },
    { id: "4", name: "Pleidae", marked: false, color: "#fff" },
    { id: "5", name: "Hebridae", marked: false, color: "#fff" },
    { id: "6", name: "Corixidae", marked: false, color: "#fff" },
    { id: "7", name: "Gerridae", marked: false, color: "#fff" },
    { id: "8", name: "Gelastocoridae", marked: false, color: "#fff" },
    { id: "9", name: "Naucoridae", marked: false, color: "#fff" },
    { id: "10", name: "Notonectidae", marked: false, color: "#fff" },
    { id: "11", name: "Veliidae", marked: false, color: "#fff" },
    { id: "12", name: "Mesoveliidae", marked: false, color: "#fff" },
    { id: "13", name: "Corixidae", marked: false, color: "#fff" },
    { id: "14", name: "Physidae", marked: false, color: "#fff" },
    { id: "15", name: "Sphaeriidae", marked: false, color: "#fff" },
    { id: "16", name: "Planorbidae", marked: false, color: "#fff" },
    { id: "17", name: "Hydrobiidae", marked: false, color: "#fff" },
    { id: "18", name: "Psychodidae", marked: false, color: "#fff" },
    { id: "19", name: "Glossiphoniidae", marked: false, color: "#fff" },
    { id: "20", name: "Erpobdellidae", marked: false, color: "#fff" },
  ])

  const [taxonsScore2, setTaxonsScore2] =useState([
    { id: "1", name: "Chironomidae", marked: false, color: "#fff" },
    { id: "2", name: "Culicidae", marked: false, color: "#fff" },
    { id: "3", name: "Muscidae", marked: false, color: "#fff" },
    { id: "4", name: "Ephydridae", marked: false, color: "#fff" },
  ])
  
  const [taxonsScore1, setTaxonsScore1] = useState([
    { id: "4", name: "Oligochaeta ", marked: false, color: "#fff" },
    { id: "4", name: "Syrphidae", marked: false, color: "#fff" },
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
})
