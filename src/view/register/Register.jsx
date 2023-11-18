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
import register from "../../service/registerController";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigation = useNavigation();

  const handleCadastro = async () => {
    try {
      if (password !== confirmPassword) {
        setMensagem("As senhas não coincidem. Por favor, verifique.");
        return;
      }

      const result = await cadastrarUsuario(username, password);

      if (result.success) {
        // Mostra a mensagem de sucesso
        setMensagem(
          "Cadastro realizado com sucesso! Redirecionando para o Dashboard."
        );
        // Agora, após um curto intervalo, redireciona para a tela de dashboard
        setTimeout(() => {
          navigation.navigate("dashboard");
        }, 2000);
      } else {
        setMensagem("Erro no cadastro. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setMensagem("Erro ao tentar cadastrar. Por favor, tente novamente.");
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
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
      <Text style={styles.textCenter}>
        Já tem uma conta? {""}
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text
            style={{
              color: "#5E63F1",
              marginRight: 5,
              position: "relative",
              top: 4,
              left: 2,
            }}
          >
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
