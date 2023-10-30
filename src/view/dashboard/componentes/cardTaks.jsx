import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

export default function CardTaks({ item1, item2, icon }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>{item1}</Text>
        <Text style={styles.textSub}>{item2}</Text>
      </View>
      <Icon name={icon} size={20} color="#ffffff" style={{ marginRight: 10 }} />
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
