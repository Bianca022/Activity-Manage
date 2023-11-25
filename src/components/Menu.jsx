import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import MessageComponent from "../components/MessageComponent";

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { cadastrarAtividade } from "../service/activitiesController";

export default function Menu() {
  const navigation = useNavigation();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [iconPressed, setIconPressed] = useState(false);

  const toggleIconColor = () => {
    setIconPressed(!iconPressed);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //cadastro de atividade
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const criarAtividade = async () => {
    try {
      const formData = new FormData();
      formData.append("title", titulo);
      formData.append("description", descricao);

      // Adicione os console.log para verificar as informações dos inputs
      console.log("Título da atividade:", titulo);
      console.log("Descrição da atividade:", descricao);

      const result = await cadastrarAtividade(formData);

      setShowSuccessMessage(true);
      console.log("Atividade cadastrada:", result);
    } catch (error) {
      setShowErrorMessage(true);
      console.error("Erro ao cadastrar atividade:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("dashboard")}
        >
          <Icon
            name="home"
            size={24}
            color={iconPressed ? "#FED36A" : "#526A75"}
          />
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("notification")}
        >
          <Icon
            name="bell"
            size={22}
            color={iconPressed ? "#FED36A" : "#526A75"}
          />
          <Text style={styles.menuItemText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItemPlus} onPress={openModal}>
          <Icon
            name="plus"
            size={28}
            color={iconPressed ? "#FED36A" : "#263238"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("screenTask")}
        >
          <Icon
            name="calendar"
            size={22}
            color={iconPressed ? "#FED36A" : "#526A75"}
          />
          <Text style={styles.menuItemText}>Atividades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("config")}
        >
          <Icon
            name="cog"
            size={22}
            color={iconPressed ? "#FED36A" : "#526A75"}
          />
          <Text style={styles.menuItemText}>Configurações</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#d1a63a", fontSize: 18 }}>
                Criar Atividade
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon
                  name="close"
                  size={28}
                  style={{ marginLeft: 20, color: "#fff" }}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ color: "#ffffff", fontSize: 16 }}>
              TITULO DA ATIVIDADE
            </Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder=" PREENCHA ESTE CAMPO"
              onChangeText={(text) => setTitulo(text)}
            />
            <Text style={{ color: "#ffffff", fontSize: 16 }}>
              DESCRIÇÃO DA ATIVIDADE
            </Text>
            <TextInput
              style={styles.input1}
              placeholderTextColor="#fff"
              onChangeText={(text) => setDescricao(text)}
            />
            <TouchableOpacity
              onPress={criarAtividade}
              style={{
                backgroundColor: "#FED36A",
                width: 275,
                height: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#201F1F",
                  paddingLeft: 10,
                  fontSize: 18,
                }}
              >
                Criar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <MessageComponent
        message="Atividade cadastrada com sucesso!"
        type="success"
        isVisible={showSuccessMessage}
        onClose={() => setShowSuccessMessage(false)}
      />
      <MessageComponent
        message="Ops! Algo deu errado ao cadastrar a atividade."
        type="error"
        isVisible={showErrorMessage}
        onClose={() => setShowErrorMessage(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 80,
    padding: 10,
    backgroundColor: "#263238",
  },
  menuItemPlus: {
    backgroundColor: "#FED36A",
    padding: 15,
  },
  menuItem: {
    alignItems: "center",
  },
  menuItemText: {
    color: "#526A75",
    fontSize: 11,
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalBody: {
    backgroundColor: "#606060",
    width: 320,
    height: 400,
    padding: 20,
    borderRadius: 20,
  },
  input: {
    backgroundColor: "#464646",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  input1: {
    backgroundColor: "#464646",
    padding: 10,
    height: 90,
    borderRadius: 10,
    textAlign: "center",
    color: "#fff",
    marginBottom: 40,
  },
  input2: {
    backgroundColor: "#464646",
    padding: 5,
    width: 120,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    color: "#fff",
    marginRight: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input3: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 135,
    backgroundColor: "#464646",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 10,
  },
});
