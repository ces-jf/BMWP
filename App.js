//React
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Expo
import { StatusBar } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";

import { useFonts } from "expo-font";
import { Pompiere_400Regular } from "@expo-google-fonts/pompiere";
import { Poppins_100Thin,Poppins_500Medium } from "@expo-google-fonts/poppins";

//Local
import HelpPage from "./src/Pages/HelpPage";
import ChangeBMWP from "./src/Pages/ChangeBMWP";
import LoadingPage from "./src/Pages/LoadingPage";
import RegisterPage from "./src/Pages/RegisterPage"
import ScorePage from "./src/Pages/ScorePage";

//Navegação de telas, a partir dos botões
const Stack = createStackNavigator();
function MyStack() {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RegisterPage" component={RegisterPage}/>
        <Stack.Screen name="ChangeBMWP" component={ChangeBMWP} />
        <Stack.Screen name="ScorePage" component={ScorePage} />
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="HelpPage" component={HelpPage} />
      </Stack.Navigator>
    </View>
  );
}


export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);

  let [fontsLoaded, fontError] = useFonts({
    Pompiere_400Regular,
    Poppins_100Thin,
    Poppins_500Medium
    
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyStack></MyStack>
      <StatusBar style="auto"></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  }
});
