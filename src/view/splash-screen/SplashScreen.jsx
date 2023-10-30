import React, { useState, useEffect } from "react";

import { StyleSheet, View, Animated } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function SplachScreen() {
  const [logoY] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  //Animação da logo
  React.useEffect(() => {
    Animated.timing(logoY, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  //temporizador para ir para a tela de login
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("login");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        alt=""
        source={require("../../assets/icon/logo2.png")}
        style={{
          width: 150,
          height: 150,
          opacity: logoY,
          marginTop: 180,
          transform: [
            {
              translateY: logoY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -100],
              }),
            },
          ],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
