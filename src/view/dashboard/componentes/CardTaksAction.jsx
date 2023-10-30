import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CardTaksActions({
  item1,
  item2,
  textDecorationLine,
  item2Style,
}) {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.textTitle, { textDecorationLine: textDecorationLine }]}
      >
        {item1}
      </Text>
      <Text style={[styles.textItem2, item2Style]}>{item2}</Text>
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
    fontSize: 16,
    paddingLeft: 5,
  },
  textItem2: {
    color: "#fff",
    fontSize: 14,
    paddingRight: 5,
  },
});
