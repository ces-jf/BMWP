import React from "react";
import { View, StyleSheet } from "react-native";

import SubTitlePompiere from "../Text/SubTitles";

export default function LocationPlate({text}) {
  return (
    <View style={styles.plateArea}>
      <SubTitlePompiere color={"#000"} fontSize={24} text={text}></SubTitlePompiere>
    </View>
  );
}
const styles = StyleSheet.create({
  plateArea: {

    padding: 10,
    paddingLeft:20,
    paddingRight:20,

    marginTop:30,
    
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",

    backgroundColor:"#C0E5FA",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

  },
});
 