import { BASE_URL } from "../utils/contants";
import axios from "axios";
const ContactUsAPI = async ({ name, email, message }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/contact-us`,
      { name, email, message },
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw new Error(err.response?.data || err.message);
  }
};

export default ContactUsAPI;
