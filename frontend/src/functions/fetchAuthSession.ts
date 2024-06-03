import { API_URL } from "@/utils/API_URL";
import axios from "axios";

export const fetchAuthSession = async () => {
  if (sessionStorage.getItem("MEDILINK_SESSION")) {
    return JSON.parse(sessionStorage.getItem("MEDILINK_SESSION")!);
  } else {
    try {
      const response = await axios.get(`${API_URL}/session`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
};
