import { apiConnection } from "../config/api";

export const cadastrarAtividade = async (formData) => {
  try {
    console.log("Enviando dados para a API:", formData);

    const response = await apiConnection.post("./routes/activitiesRoutes", {
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
export const deletePosition = async (activityId) => {
  try {
    console.log("Enviando dados para a API delete, ID:", activityId);

    const response = await apiConnection.delete(
      `./routes/deleteRoutes/${activityId}`
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

    const response = await apiConnection.patch(
      "./routes/activitiesEditRoutes",
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
    const response = await apiConnection.get("./routes/activitiesViewRoutes");

    if (response.status === 200) {
      return { success: true, data: response.data };
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao visualizar atividade:", error);
    throw error;
  }
};
