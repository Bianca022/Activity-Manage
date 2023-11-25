import { apiConnection } from "../config/api";

export const cadastroUser = async (formData) => {
  try {
    console.log("Enviando dados para a API:", formData);

    // Atualize o endpoint da API para a rota correta de cadastro de usuário
    const response = await apiConnection.post("./routes/registerRoutes", {
      formData,
    });

    if (response.status === 200) {
      console.log("Usuário cadastrado com sucesso:", response.data.message);
      console.log("Dados do usuário:", response.data.user);
    } else {
      console.error("Falha ao cadastrar usuário:", response.data.message);
      console.error("Erro:", response.data.error);
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};
