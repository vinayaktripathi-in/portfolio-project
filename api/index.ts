import axios from "axios";

const BASE_URL = "https://portfolio-project-backend-p7xr.onrender.com";

interface SignUpUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface SignInUserData {
  email: string;
  password: string;
}
interface ForgotPasswordUserData {
  email: string;
}

export async function signUpApi(userData: SignUpUserData) {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function signInApi(userData: SignInUserData) {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function forgotPasswordApi(userData: ForgotPasswordUserData) {
  try {
    const response = await axios.post(`${BASE_URL}/forgot-password`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
