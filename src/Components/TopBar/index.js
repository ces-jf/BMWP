import React from "react";
import { StyleSheet, View } from "react-native";


export default function TopBar({children}) {
    return (
        <View style={styles.container}>
            {children}
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

