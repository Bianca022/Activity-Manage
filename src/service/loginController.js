import { apiConnection } from "../config/api";

export const login = async (username, password) => {
  try {
    const response = await apiConnection.post("/api/login", {
      username,
      password,
    });

    if (response.status === 200) {
      console.log("Login bem-sucedido:", response.data.message);
      console.log("Usuário:", response.data.user);
    } else {
      console.error("Falha na autenticação:", response.data.message);
      console.error("Erro:", response.data.error);
    }

    return response.data;
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    throw error;
  }
};
