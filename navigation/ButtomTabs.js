import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "../screens/HomeScreen";
import MovementsScreen from "../screens/MovementsScreen";
import OpScreen from "../screens/OpScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: "center",
      alignContent: "center",
    }}
    onPress={onPress}
  >
    <LinearGradient
      // Button Linear Gradient
      colors={["#064ea6", "#00d4ff"]}
      start={{ y: 0.0, x: 3.0 }}
      end={{ y: 1.0, x: 0.0 }}
      style={{
        borderRadius: 15,
        borderWidth: 5,
        borderColor: "#f2f2f2",
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          tintColor: "white",
        }}
      >
        {children}
      </View>
    </LinearGradient>
  </TouchableOpacity>
);
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "white",
        borderTopLeftRadius: 35,
        tabBarStyle: {
          backgroundColor: "#064ea6",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          height: 90,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#ecf1f5" : "white",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Movements"
        component={MovementsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/movements.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#ecf1f5" : "white",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Op"
        component={OpScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/transfer.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: "white",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/settings.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#ecf1f5" : "white",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/logout.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#ecf1f5" : "white",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
