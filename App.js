import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import { useFonts, Pompiere_400Regular } from "@expo-google-fonts/pompiere";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";
import * as ScreenOrientation from "expo-screen-orientation";

import LoadingPage from "./src/Pages/LoadingPage";
import HomePage from "./src/Pages/HomePage";
import HelpHomePage from "./src/Pages/HomePage/Help";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={40}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarLabelStyle:{ color : "#fff", display:"none"},
      }}
    >
      <Tab.Screen
        name="LoadingPage"
        component={LoadingPage}
        options={{
          tabBarLabel: "Loading",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="timer" color={"#fff"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="home" color={"#fff"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="HelpPage"
        component={HelpHomePage}
        options={{
          tabBarLabel: "Ajuda",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="help" color={"#fff"} size={30} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);

  let [fontsLoaded, fontError] = useFonts({
    Pompiere_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
      <StatusBar style="auto"></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  tabBar: {
    width: "100%",
    height: "8%",

    color:"#fff",
  },
});
