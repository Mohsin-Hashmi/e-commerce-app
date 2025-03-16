import { BASE_URL } from "../utils/contants";
import axios from "axios";
export const LoginAPI = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { email, password },
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.response?.data || err.message)
  }
};
