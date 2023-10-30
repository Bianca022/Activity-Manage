import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Menu from "../../components/Menu";
import TaskConcluded from "./componentes/taskConcluded";
import Task from "./componentes/task";

export default function ScreenTask() {
  return (
    <View style={styles.container}>
      <TaskConcluded></TaskConcluded>
      <TaskConcluded></TaskConcluded>
      <Task></Task>
      <Task></Task>
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
