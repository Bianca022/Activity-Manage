import axios from "axios";

const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/login", {
      email,
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

export default login;
