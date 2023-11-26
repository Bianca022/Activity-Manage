import axios from "axios";

const cadastroUser = async (formData) => {
  try {
    console.log("Enviando dados para a API:", formData);

    // Atualize o endpoint da API para a rota correta de cadastro de usuário
    const response = await axios.post(
      "http://localhost:3000/api/register",
      formData
    );

    if (response.status === 200) {
      console.log("Usuário cadastrado com sucesso:", response.data.message);
      console.log("Dados do usuário:", response.data.user);
      return { success: true, data: response.data };
    } else {
      console.error("Falha ao cadastrar usuário:", response.data.message);
      console.error("Erro:", response.data.error);
      return {
        success: false,
        message: response.data.message,
        error: response.data.error,
      };
    }
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

export default cadastroUser;
