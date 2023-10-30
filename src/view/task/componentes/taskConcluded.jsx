import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Task() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon name="check-circle" size={22} color="#7A7777" />
      <Text style={[styles.textSub, { textDecorationLine: "line-through" }]}>
        Criar tela de visualizar atividades
      </Text>
      <Text style={styles.textSub}>6.00 am</Text>
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
    color: "#7D7878",
    paddingRight: 10,
  },
});
