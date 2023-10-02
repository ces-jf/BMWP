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

import Bmwp1983 from "./src/Pages/TypeBMWP/1983";
import Bmwp1998 from "./src/Pages/TypeBMWP/1998";
import Bmwp2000 from "./src/Pages/TypeBMWP/2000/Bmwp2000";
import Bmwp2018 from "./src/Pages/TypeBMWP/2018";

//Navegação de telas, a partir dos botões
const Stack = createStackNavigator();
function MyStack() {
  return (
    <View style={styles.container}>
      <View style={styles.StatusBar}/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RegisterPage" component={RegisterPage}/>
        <Stack.Screen name="ChangeBMWP" component={ChangeBMWP} />

        <Stack.Screen name="Bmwp1983" component={Bmwp1983}/>
        <Stack.Screen name="Bmwp1998" component={Bmwp1998}/>
        <Stack.Screen name="Bmwp2000" component={Bmwp2000}/>
        <Stack.Screen name="Bmwp2018" component={Bmwp2018}/>


        <Stack.Screen name="HelpPage" component={HelpPage} />
        <Stack.Screen name="ScorePage" component={ScorePage} />
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
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
      <StatusBar style="light"></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  StatusBar :{
    width:"100%",
    height:30,
    backgroundColor:"#011526"
  }
});
