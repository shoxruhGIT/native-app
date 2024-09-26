import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Amazing weather",
    description: "Go for a walk, stop staying at home!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Sit at home",
    description: "Do you see what's on the street?",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take an umbrella",
    description: "Perhaps the rain will increase soon",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "It's raining outside",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "There's a snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Dusty",
    description: "Better close the windows",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "On the street smog :(",
    description: "I do not advise going out unnecessarily",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "There's a snow outside!",
    description: "Dress warmly, make snowmen",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can't see a damn thing in the fog",
    description: "Do you see what's on the street?",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "The clouds",
    description: "Go for a walk, stop staying at home!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const [query, setquery] = useState("");
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.Maincontainer}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <View>
          <MaterialCommunityIcons
            style={styles.icon}
            name={weatherOptions[condition].iconName}
          />
        </View>
        <Text style={styles.temp}>{Math.floor(temp)}°C</Text>
        <View style={styles.desc}>
          <Text>{weatherOptions[condition].title}</Text>
          <Text>{weatherOptions[condition].description}</Text>
        </View>
        <View style={styles.searchInput}>
          <TextInput
            placeholder="City"
            style={styles.input}
            value={query}
            onChangeText={(text) => setquery(text)}
          />
          <Button
            title="Search"
            style={styles.btn}
            onPress={() => {
              setWeather(query);
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    fontSize: 200,
  },
  name: {
    fontSize: 30,
    fontWeight: "700",
  },
  temp: {
    fontSize: 38,
    fontWeight: "700",
  },
  desc: {
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#e8e8e8",
    width: "80%",
    padding: 10,
    marginTop: 20,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  input: {
    fontWeight: "600",
    fontSize: 20,
  },
  btn: {
    borderRadius: 5,
  },
});
