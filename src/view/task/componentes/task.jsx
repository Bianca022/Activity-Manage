import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Task() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon name="circle-o" size={22} color="#ffffff" />
      <Text style={styles.textSub}>Fazer o backlog do aplicativo</Text>
      <Text style={styles.textSub}>11.00 am</Text>
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
