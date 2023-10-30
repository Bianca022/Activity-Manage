import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

export default function ScreenDashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Atividade Concluida</Text>
        <Text style={styles.textSub}>Criar tela de visualizar atividades</Text>
      </View>
      <Text style={styles.textSub}>2m</Text>
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
    height: 80,
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
