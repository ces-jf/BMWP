//React
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Expo
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFonts, Pompiere_400Regular } from "@expo-google-fonts/pompiere";

//Local
import HelpPage from "./src/Pages/HelpPage";
import HomePage from "./src/Pages/HomePage";
import LoadingPage from "./src/Pages/LoadingPage";
import ScorePage from "./src/Pages/ScorePage";

//Navegação de telas, a partir dos botões
const Stack = createStackNavigator();
function MyStack() {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ScorePage" component={ScorePage} />
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="HelpPage" component={HelpPage} />
      </Stack.Navigator>
    </View>
  );
}

//Navegação de tela a partir da bottom bar
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: { color: "#fff", display: "none" },
          tabBarBackground: () => (
            <BlurView
              tint="dark"
              intensity={40}
              style={StyleSheet.absoluteFill}
            />
          ),
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
          name="ScorePage"
          component={ScorePage}
          options={{
            tabBarLabel: "Score",
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons
                name="water-alert"
                color={"#fff"}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
          name="HelpPage"
          component={HelpPage}
          options={{
            tabBarLabel: "Help",
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons name="help" color={"#fff"} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
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
      {/* <MyTabs></MyTabs> */}
      <MyStack></MyStack>
      <StatusBar style="auto"></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  tabBar: {
    width: "100%",
    height: "8%",

    color: "#fff",
  },
});
