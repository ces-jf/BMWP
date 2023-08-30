import React from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "../../Components/TopBar";
import TitlePompiere from "../../Components/Text/Title";
import BtnHelp from "../../Components/Buttons/Help";
import BtnHome from "../../Components/Buttons/Home";
import LocationPlate from "../../Components/LocationPlate";
import BtnTrash from "../../Components/Buttons/Trash";
import ParameterRuler from "../../Components/ParameterRuler/ParameterRuler";
import SubTitlePompiere from "../../Components/Text/SubTitles";

export default function ScorePage() {
    return (
        <View style={styles.container}>
            <TopBar>
                <BtnHome></BtnHome>
                <TitlePompiere text={"BMWP & ASPT"} color={"#fff"}></TitlePompiere>
                <BtnHelp></BtnHelp>
            </TopBar>
            <View style={styles.locationContainer}>
                <View style={styles.locationPlateContainer}>
                    <LocationPlate text={"Resultados"}></LocationPlate>
                </View>
                <View style={styles.trashContainer}>
                    <BtnTrash></BtnTrash>
                </View>
            </View>
            <View style={styles.containerScore}>
                <SubTitlePompiere color={"#000"} fontSize={30} text={"Score Total: 135"}></SubTitlePompiere>
                <ParameterRuler></ParameterRuler>

            </View>

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
    locationPlateContainer: {
        flex: 1,
    },
    trashContainer: {
        marginLeft: 10,
        marginTop: 20,
    },
    containerScore: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        height: "15%",
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }
});
