import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Menu from "../../components/Menu";
import TaskConcluded from "./componentes/taskConcluded";

export default function ScreenTask() {
  return (
    <View style={styles.container}>
      <TaskConcluded></TaskConcluded>
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
