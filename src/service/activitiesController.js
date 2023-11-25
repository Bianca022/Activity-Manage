import { apiConnection } from "../config/api";
import axios from "axios";

export const cadastrarAtividade = async (formData) => {
  try {
    console.log("Enviando dados para a API:", formData);

    const response = await axios.post("http://localhost:3000/api/add", {
      formData,
    });

    if (response.status === 200) {
      console.log("Atividade cadastrada com sucesso:", response.data.message);
      console.log("Atividade:", response.data.activity);
    } else {
      console.error("Falha ao cadastrar atividade:", response.data.message);
      console.error("Erro:", response.data.error);
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar atividade:", error);
    throw error;
  }
};

//Rota delete
export const deletePosition = async (id) => {
  try {
    console.log("Enviando dados para a API delete, ID:", id);

    const response = await axios.delete(
      `http://localhost:3000/api/delete/${id}`
    );

    if (response.status === 200) {
      return { success: true, message: response.data.message };
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao deletar atividade:", error);
    throw error;
  } finally {
    localStorage.removeItem("Id_activity");
  }
};

// Rota update
export const updatePosition = async (formData) => {
  try {
    console.log("Enviando dados para a API edit:", formData);

    const response = await axios.patch(
      "http://localhost:3000/api/activities/edit/{id}",
      {
        formData,
      }
    );

    if (response.status === 200) {
      // Registro do setor realizado com sucesso
      return { success: true, message: response.data.message };
    } else {
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao editar atividade:", error);
    throw error;
  }
};

//Rota de visualizar
export const fetchDataPositions = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/activities");

    if (response.status === 200) {
      return { success: true, data: response.data };
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao visualizar atividade:", error);
    throw error;
  }
};
