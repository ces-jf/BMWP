import React from "react";
import { View, StyleSheet } from "react-native";

import SubTitlePompiere from "../Text/SubTitles";

export default function LocationPlate({text}) {
  return (
    <View style={styles.plateArea}>
      <SubTitlePompiere color={"#fff"} fontSize={24} text={text}></SubTitlePompiere>
    </View>
  );
}
const styles = StyleSheet.create({
  plateArea: {

    margin:15,

    padding: 10,
    paddingLeft:20,
    paddingRight:20,
    
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",

    borderColor: "#999",
    borderWidth: 0.5,
    borderBottomWidth: 2,
    
    borderRadius: 5,

    backgroundColor:"#025373",
  },
});
 