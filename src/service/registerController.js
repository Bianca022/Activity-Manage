import { apiConnection } from "../config/api";

export const cadastrarUsuario = async (FormData) => {
  try {
    const response = await apiConnection.post("/api/register", {
      FormData,
    });

    if (response.status === 200) {
      console.log("Cadastro bem-sucedido:", response.data.message);
      console.log("Usuário:", response.data.user);
    } else {
      console.error("Falha no cadastro:", response.data.message);
      console.error("Erro:", response.data.error);
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao realizar cadastro:", error);
    throw error;
  }
};
