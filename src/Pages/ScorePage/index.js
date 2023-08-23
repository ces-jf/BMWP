import React from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "../../Components/TopBar";
import TitlePompiere from "../../Components/Text/Title";
import BtnHelp from "../../Components/Buttons/Help";
import BtnBack from "../../Components/Buttons/Back";
import LocationPlate from "../../Components/LocationPlate";
import BtnTrash from "../../Components/Buttons/Trash";

export default function ScorePage() {
    return (
        <View style={styles.container}>
            <TopBar>
                <BtnBack></BtnBack>
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
});
