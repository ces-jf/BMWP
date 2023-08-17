import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "./src/Components/TopBar";

import { useFonts, Pompiere_400Regular } from '@expo-google-fonts/pompiere';
import LoadingPage from "./src/Pages/LoadingPage";
import HomePage from "./src/Pages/HomePage";


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Pompiere_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoadingPage></LoadingPage> */}
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:30,
  },
});
