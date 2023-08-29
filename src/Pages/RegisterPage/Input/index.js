import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";

export default TextInputExample = ({
  value,
  placeholder,
  keyboardType,
  marginBot,
  textForLabel,
}) => {
  const [text, onChangeText] = useState(`${value}`);
  const [color, changeColor] = useState("#rgba(243, 142, 142, 0.18)");

  const mudarCor = () => {
    if (text !== value) {
      changeColor("#C0E5FA");
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.label}>{textForLabel}</Text>
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
  label: {
    fontSize: 24,
    fontFamily: "Poppins_500Medium",

    color: "#000",
    textTransform: "capitalize",
  },
  input: {
    fontSize:15,
    fontFamily: "Poppins_500Medium",

    color: "#000",
    textTransform: "capitalize",
  },
});
