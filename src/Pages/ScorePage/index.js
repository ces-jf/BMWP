import React from "react";
import { StyleSheet, View } from "react-native";
import Bar from "../../Components/Bar";
import TitlePompiere from "../../Components/Text/Title";
import ButtonsSelect from "../../Components/BarButtons";
import LocationPlate from "../../Components/LocationPlate";
import BtnTrash from "../../Components/Buttons/Trash";
import ParameterRuler from "../../Components/ParameterRuler/ParameterRuler";
import SubTitlePompiere from "../../Components/Text/SubTitles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ScorePage() {
    return (
        <View style={styles.container}>
            <Bar>
                <ButtonsSelect typeButton={"btnBack"}></ButtonsSelect>
                <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
                <ButtonsSelect typeButton={"btnHelp"}></ButtonsSelect>
            </Bar>
            <View style={styles.locationContainer}>
                <View>
                    <LocationPlate text={"Resultados"}></LocationPlate>
                </View>
                <View style={styles.trashContainer}>
                    <BtnTrash></BtnTrash>
                </View>
            </View>
            <View style={styles.containerScore}>
                <SubTitlePompiere color={"#000"} fontSize={24} text={"Score Total: 135"}></SubTitlePompiere>
                <ParameterRuler score={135}></ParameterRuler>
            </View>
            <View style={styles.containerScore}>
                <SubTitlePompiere color={"#000"} fontSize={24} text={"Número de Táxons"}></SubTitlePompiere>
                <SubTitlePompiere color={"#000"} fontSize={24} text={"25"}></SubTitlePompiere>
            </View>
            <View style={styles.containerScore}>
                <SubTitlePompiere color={"#000"} fontSize={24} text={"ASPT"}></SubTitlePompiere>
                <SubTitlePompiere color={"#000"} fontSize={24} text={"5.4"}></SubTitlePompiere>
            </View>
            <TouchableOpacity
                onPress={null}
                style={styles.btnSendReview}
            >
                <SubTitlePompiere color={"#000"} fontSize={20} text={"Enviar Análise"}></SubTitlePompiere>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        margin: 0,
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    trashContainer: {
        marginLeft: 10,
        marginTop: 20,
    },
    containerScore: {
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        height: "17%",
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    btnSendReview: {
        maxHeight: "100%",
        marginHorizontal: 20,

        padding: 20,

        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",

        borderWidth: 0.5,
        borderBottomWidth: 4,

        borderRadius: 10,
        borderColor: "#748A96",

        borderRadius: 10,
        backgroundColor: "#C8FAC0",
    }
});
