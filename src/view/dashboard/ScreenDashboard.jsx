import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import Menu from "../../components/Menu";
import CardTaks from "./componentes/cardTaks";
import CardTaksActions from "./componentes/CardTaksAction";

export default function ScreenDashboard() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 20 }}>Activity Manage</Text>
      <CardTaks
        item1="Atividade Pendente"
        item2="fazer backlog"
        icon="chevron-down"
      />
      <CardTaks
        item1="Atividade Pendente"
        item2="fazer Relatorio final"
        icon="chevron-down"
      />
      <Text style={{ color: "#fff", fontSize: 20, marginTop: 30 }}>
        Todas as atividades
      </Text>
      <CardTaksActions
        item1="Fazer backlog"
        item2Style={{ color: "#CE1C1C" }}
        item2="37%"
      />
      <CardTaksActions
        item1="Fazer Relatorio final"
        item2Style={{ color: "#A49830" }}
        item2="55%"
      />
      <CardTaksActions
        item1="Criar tela de dashboard"
        item2Style={{ color: "#2A8E1A" }}
        item2="100%"
      />
      <CardTaksActions
        item1="Criar tela de visualizar ativi..."
        item2="100%"
        textDecorationLine="line-through"
        item2Style={{ color: "#2A8E1A" }}
      />
      <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    width: "100%",
    paddingTop: 60,
    paddingLeft: 18,
    backgroundColor: "#51555B",
  },
});
