import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BtnHome from "../Buttons/home";
import BtnHelp from "../Buttons/Help";

export default function TopBar() {
    return (
        <View style={styles.container}>
            <BtnHome></BtnHome>
            <Text style={styles.text}>BMWP & ASPT</Text>
            <BtnHelp></BtnHelp>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#0972AD",
        height: 60,
        width: "100%",
    },
    text: {
        fontFamily: "Pompiere_400Regular",
        fontSize: 30,
        textTransform: "uppercase",
        color: "#FFFFFF",
    },
});

