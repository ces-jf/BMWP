import React, { useState } from "react";
import { SafeAreaView, Text, TextInput } from "react-native";

export default TextInputExample = ({
  value,
  placeholder,
  keyboardType,
  marginBot,
  textForLabel,
}) => {
  const [text, onChangeText] = useState(`${value}`);
  const [color, changeColor] = useState("#F38E8E");

  const mudarCor = () => {
    if (text !== value) {
      changeColor("#C0E5FA");
    }
  };

  return (
    <SafeAreaView>
      <Text>{textForLabel}</Text>
      <TextInput
        style={{
          marginBottom: marginBot,
          minWidth: "100%",
          height: 40,
          padding: 10,
          borderRadius: 10,
          backgroundColor: color,
        }}
        value={text}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onChange={mudarCor}
        keyboardType={keyboardType}
      />
    </SafeAreaView>
  );
};
