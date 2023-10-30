import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import Menu from "../../components/Menu";
import Card from "../Config/componentes/card";

export default function ScreenDashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        alt="login"
        style={{ marginBottom: 50, width: 150, height: 150 }}
        source={require("../../assets/icon/logo2.png")}
      ></Image>
      <Card icon1="user" icon2="pencil" item="ACTIVITY MANAGE"></Card>
      <Card icon1="envelope" icon2="pencil" item="actmanage@active.com"></Card>
      <Card icon1="lock" icon2="pencil" item="*********"></Card>
      <Card
        icon1="shield"
        icon2="pencil"
        item="Politicas e privacidade
"
      ></Card>
      <Card icon1="gear" icon2="pencil" item="Configurações avançadas"></Card>
      <TouchableOpacity
        onPress={() => navigation.navigate("login")}
        style={{
          backgroundColor: "#FED36A",
          width: 350,
          height: 50,
          margin: 30,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Icon name="arrow-right" size={22} color="#201F1F" />
        <Text
          style={{
            color: "#201F1F",
            paddingLeft: 10,
            fontSize: 18,
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
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
