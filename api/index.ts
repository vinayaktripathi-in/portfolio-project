import axios from "axios";

const BASE_URL = "https://portfolio-project-backend-p7xr.onrender.com";

interface UserData {
  email: string;
  password: string;
  // Add other properties as needed for sign-up data
}

export async function signUpApi(userData: UserData) {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function signInApi(userData: UserData) {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
