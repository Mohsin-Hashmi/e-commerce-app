import axios from "axios";
import { BASE_URL } from "../utils/contants";
const profileAPI = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/profile`, formData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
    if (!response) {
      throw new Error("Error in profile API");
    }

    return response?.data?.profile;
  } catch (err) {
    console.log("Error in profile API");
  }
};
export default profileAPI;
