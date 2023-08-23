import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import SubTitlePompiere from "../../Text/SubTitles";

export default function BtnNavigate({text, action}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <SubTitlePompiere color={"#000"} fontSize={24} text={text}></SubTitlePompiere>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
    marginTop: 20,
    marginBottom: 20,
    marginLeft:30,
    marginRight:30,
    
    padding:10,

    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    
    borderRadius: 10,
    backgroundColor:"#C0E5FA",
  },
  button: {
    minWidth:"100%",
  },
});
