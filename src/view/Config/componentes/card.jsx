import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Task({ item, icon1, icon2 }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon name={icon1} size={22} color="#ffffff" />
      <Text style={styles.textSub}>{item}</Text>
      <Icon name={icon2} size={22} color="#ffffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: 360,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#1c1d1f",
  },
  textTitle: {
    color: "#fff",
  },
  textSub: {
    color: "#ffffff",
    paddingRight: 10,
  },
});
