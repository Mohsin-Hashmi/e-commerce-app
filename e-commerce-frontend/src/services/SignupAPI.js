import { BASE_URL } from "../utils/contants";
import axios from "axios";
export const SignupAPI = async (payload) => {
  try {
    const response= await axios.post(
      `${BASE_URL}/signup`,
       payload,
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
};
