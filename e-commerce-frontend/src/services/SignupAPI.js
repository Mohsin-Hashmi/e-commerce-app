import { BASE_URL } from "../utils/contants";
import axios from "axios";
export const SignupAPI = async ({ name, email, password, confirmPassword, role }) => {
  try {
    const response= await axios.post(
      `${BASE_URL}/signup`,
      { name, email, password, confirmPassword, role },
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
};
