import { apiConnection } from "../config/api";
import axios from "axios";

export const cadastrarAtividade = async (formData) => {
  try {
    console.log("Enviando dados para a API:", formData);

    const response = await axios.post(
      "http://localhost:3000/api/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

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
export const fetchDataTask = async () => {
  try {
    console.log("Antes da chamada axios.get");
    const response = await axios.get("http://localhost:3000/api/activities");
    console.log("Resposta da chamada axios.get:", response);

    if (response.data) {
      console.log("Atividades recuperadas:", response.data.activities);
      return { success: true, data: response.data };
    } else {
      console.error(
        "Erro ao visualizar atividade. Resposta sem dados:",
        response
      );
      return {
        success: false,
        message: "Resposta sem dados válidos",
      };
    }
  } catch (error) {
    if (error.response) {
      // O servidor respondeu com um status diferente de 2xx
      console.error(
        "Erro ao visualizar atividade. Resposta não 2xx:",
        error.response.status
      );
      return {
        success: false,
        message: `Erro de resposta da API: ${error.response.status}`,
      };
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta do servidor
      console.error("Erro ao visualizar atividade. Sem resposta do servidor.");
      return { success: false, message: "Sem resposta do servidor" };
    } else {
      // Algo aconteceu na configuração da requisição que causou o erro
      console.error("Erro ao visualizar atividade:", error.message);
      return { success: false, message: error.message };
    }
  }
};
