import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

export default TextInputExample = ({
  value,
  placeholder,
  keyboardType,
  marginBot,
  textForLabel,
  children,
}) => {
  const [text, onChangeText] = useState(`${value}`);
  const [color, changeColor] = useState("#rgba(243, 142, 142, 0.18)");

  const mudarCor = () => {
    if (text !== value) {
      changeColor("#C0E5FA");
    }
  };

  return (
    <SafeAreaView style={styles.inputContainer}>
      <View style={styles.titleContainer}>
        {children}
        <Text style={styles.label}>{textForLabel}</Text>
      </View>
      <TextInput
        style={[
          styles.input,
          {
            marginBottom: marginBot,
            minWidth: "100%",
            height: 50,
            padding: 10,
            borderRadius: 10,
            backgroundColor: color,
          },
        ]}
        value={text}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onChange={mudarCor}
        keyboardType={keyboardType}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    marginBottom: 30,

    borderWidth: 1,
    borderBottomWidth: 5,

    borderRadius: 10,
    borderColor: "#999",
  },
  titleContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  label: {
    margin:15,
    fontSize: 24,
    fontFamily: "Poppins_500Medium",

    color: "#000",
    textTransform: "capitalize",
  },
  inputArea: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#555",
  },
  input: {
    fontSize: 15,
    fontFamily: "Poppins_500Medium",

    color: "#000",
    textTransform: "capitalize",
  },
});
