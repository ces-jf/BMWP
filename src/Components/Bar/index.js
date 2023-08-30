import React from "react";
import { StyleSheet, View } from "react-native";


export default function Bar({children}) {
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
        alignContent:"center",
        justifyContent: "space-between",

        paddingRight:15,
        paddingLeft:15,
        height: 60,
        width: "100%",
        
        backgroundColor: "#0972AD",
    },
    text: {
        fontFamily: "Pompiere_400Regular",
        fontSize: 30,
        textTransform: "uppercase",
        color: "#FFFFFF",
    },
});

