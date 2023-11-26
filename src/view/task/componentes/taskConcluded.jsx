import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  deletePosition,
  updatePosition,
  fetchDataTask,
} from "../../../service/activitiesController";

import MessageComponent from "../../../components/MessageComponent";

export default function Task() {
  const navigation = useNavigation();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleEdit = () => {
    setIsEditModalVisible(true);
  };

  const closeModal = () => {
    setIsEditModalVisible(false);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await updatePosition({
        title: editedTitle,
        description: editedDescription,
      });

      if (response.success) {
        console.log("Atividade atualizada com sucesso");
        console.log("Resposta da API:", response); // Adiciona um console.log para verificar a resposta da API
        setIsEditModalVisible(false);
        setShowSuccessMessage(true);
      } else {
        console.error("Erro ao atualizar atividade:", response.message);
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.error("Erro ao atualizar atividade:", error);
    }
  };

  const handleDelete = async (activityId) => {
    try {
      const response = await deletePosition(activityId);

      if (response.success) {
        console.log("Atividade deletada com sucesso");
        console.log("Resposta da API:", response);
        setShowSuccessMessage(true);
      } else {
        console.error("Erro ao deletar atividade:", response.message);
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.error("Erro ao deletar atividade:", error);
    }
  };

  //

  const [atividades, setAtividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/activities"
        );

        if (response.status === 200) {
          setAtividades(response.data.activities);
          console.log("Atividades recuperadas:", response.data.activities);
        } else {
          setError({
            success: false,
            message: `Erro de resposta da API: ${response.status}`,
          });
        }

        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
        setError({ success: false, message: error.message });
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleComplete}>
        <Icon
          name={isCompleted ? "check-circle" : "circle-o"}
          size={22}
          color={isCompleted ? "#00FF00" : "#7A7777"}
        />
      </TouchableOpacity>
      {atividades.map((atividade) => (
        <View key={atividade.id} style={styles.itemContainer}>
          <Text
            style={[
              styles.textSub,
              atividade.isCompleted && { textDecorationLine: "line-through" },
            ]}
          >
            {atividade.title}
          </Text>
          <Text
            style={[
              styles.textSub,
              atividade.isCompleted && { textDecorationLine: "line-through" },
            ]}
          >
            {atividade.description}
          </Text>
        </View>
      ))}

      {/* Edit Button */}
      <TouchableOpacity onPress={handleEdit}>
        <Icon name="pencil" size={20} color="#ffffff" />
      </TouchableOpacity>

      {/* Delete Button */}
      <TouchableOpacity onPress={handleDelete}>
        <Icon name="trash" size={20} color="#ffffff" />
      </TouchableOpacity>

      {/* Edit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEditModalVisible}
        onRequestClose={() => {
          setIsEditModalVisible(!isEditModalVisible);
        }}
      >
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
                Editar atividade
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon
                  name="close"
                  size={28}
                  style={{ marginLeft: 20, color: "#fff" }}
                />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Title"
              value={editedTitle}
              onChangeText={(text) => setEditedTitle(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={editedDescription}
              onChangeText={(text) => setEditedDescription(text)}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#FED36A",
                  width: 130,
                  height: 50,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
                onPress={() => setIsEditModalVisible(false)}
              >
                <Text
                  style={{
                    color: "#201F1F",
                    paddingLeft: 10,
                    fontSize: 18,
                  }}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                title="Submit"
                onPress={handleEditSubmit}
                style={{
                  backgroundColor: "#FED36A",
                  width: 130,
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
                  Editar
                </Text>
              </TouchableOpacity>
            </View>
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
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
});
