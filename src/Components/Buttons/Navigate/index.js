import React from "react";
import SubTitlePompiere from "../../Text/SubTitles";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BtnNavigate({text, location,color}) {

  //TODO[] adicionar pagians conforme for passado 
  const navigate = useNavigation()
  function goScore(){
    navigate.navigate(location)
  }
  return (
    <View style={[styles.container, {backgroundColor : color}]}>
      <TouchableOpacity style={styles.button} onPress={goScore}>
        <SubTitlePompiere color={"#fff"} fontSize={24} text={text}></SubTitlePompiere>
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

    borderWidth: 0.5,
    borderBottomWidth: 4,
    borderColor: "#748A96",
  },
  button: {
    minWidth:"100%",
  },
});
