import React from "react";
import SubTitlePompiere from "../../Text/SubTitles";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnNavigate({text, action}) {

  //TODO[] adicionar pagians conforme for passado 
  const navigate = useNavigation()
  function goScore(){
    navigate.navigate("ScorePage")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goScore}>
        <SubTitlePompiere color={"#000"} fontSize={24} text={text}></SubTitlePompiere>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
    margin: 15,
    padding:20,

    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",
    
    borderRadius: 10,
    backgroundColor:"#C0E5FA",
  },
  button: {
    minWidth:"100%",
  },
});
