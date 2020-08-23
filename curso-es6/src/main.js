import axios from "axios";

class Api {
  static async getUsuarioInfo(userName) {
    try {
      const reposnse = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      console.log(reposnse);
    } catch (err) {
      console.warn("Erro na API");
    }
  }
}

Api.getUsuarioInfo("gilmaresende");
