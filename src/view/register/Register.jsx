import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone FontAwesome (ou outro de sua escolha)

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Bianca" && password === "123") {
      navigation.navigate("Dashboard");
    } else {
      alert("Usuário inválido. Verifique a senha ou nome de usuário");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        alt="login"
        style={{ marginBottom: 120, width: 150, height: 150 }}
        source={require("../../assets/icon/logo2.png")}
      ></Image>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="USUARIO"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="SENHA"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CONFIRMAR SENHA"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
      <Text style={styles.textCenter}>
        Já tem uma conta? {""}
        <TouchableOpacity>
          <Text
            style={{
              color: "#5E63F1",
              marginRight: 5,
              position: "relative",
              top: 4,
              left: 2,
            }}
          >
            {""}
            Entrar
          </Text>
        </TouchableOpacity>
      </Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#dddddd",
    width: 320,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    fontWeight: "600",
  },
  buttonText: {
    color: "#141414",
    fontSize: 16,
  },
  textRight: {
    textAlign: "right",
    marginLeft: 180,
    color: "#5E63F1",
    marginBottom: 10,
    marginTop: 10,
  },
  textCenter: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 15,
  },
});
