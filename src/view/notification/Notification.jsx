import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Taks from "./componentes/taks";

import Menu from "../../components/Menu";

export default function ScreenDashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Taks></Taks>
      <Taks></Taks>
      <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: 200,
    width: "100%",
    paddingTop: 90,
    backgroundColor: "#51555B",
  },
});
