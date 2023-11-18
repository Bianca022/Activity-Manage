import { apiConnection } from "../config/api";

export const cadastrarAtividade = async (formData) => {
  try {
    const response = await apiConnection.post("/cadastrar-atividade", {
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
