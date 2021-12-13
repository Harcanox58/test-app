import React, { Component } from "react";
import { View, Text, TouchableOpacity, Pressable, Alert } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_avatar_people_person_white_tone_icon_159370.png",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    subtitle: "Vice Chairman",
  },
];

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <StatusBar style="light" />

        <LinearGradient
          // Button Linear Gradient
          colors={["#064ea6", "#00d4ff"]}
          start={{ y: 0.0, x: 2.0 }}
          end={{ y: 1.0, x: 0.0 }}
          style={{
            borderColor: "#f2f2f2",
            borderRadius: 35,
            marginTop: -30,
            marginRight: -30,
          }}
        >
          <View
            style={{
              height: 230,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 50,
                top: 60,
              }}
            >
              <Avatar
                rounded
                size="large"
                source={{
                  uri: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
                }}
              />
            </TouchableOpacity>
            <Text style={{ color: "#fff", marginLeft: 15, fontSize: 20 }}>
              {" "}
              Mi Balance{" "}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                marginLeft: 20,
              }}
            >
              Bs. 100,00
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            paddingBottom: 0,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#064ea6",
              padding: 15,
              borderRadius: 5,
            }}
            onPress={() => Alert.alert("Left button pressed")}
          >
            <Text style={{ color: "#fff" }}>Ingresar Dinero</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#064ea6",
              padding: 15,
              borderRadius: 5,
            }}
            onPress={() => Alert.alert("Right button pressed")}
          >
            <Text style={{ color: "#fff" }}>Retirar Dinero</Text>
          </Pressable>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 30,
            }}
          >
            Movimientos Recientes
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          {list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </View>
    );
  }
}
