import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/ButtomTabs";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import HomeScreen from "./screens/HomeScreen";
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
