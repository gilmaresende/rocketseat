import axios from "axios";

class Api {
  static async getUserInfor(username) {
    try {
      const response = await axios.get(
        "http://api.github.com/users/" + username
      );
      console.log(response);
    } catch (err) {
      console.log("Não encontrado!!");
    }
  }
}

Api.getUserInfor("gilmaresende");
Api.getUserInfor("gilmadfdsresende");

