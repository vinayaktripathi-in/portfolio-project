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
interface CreatePasswordUserData {
  email: string;
  password: string;
}
interface VerifyUserData {
  email: string;
  otp: string;
}

// POST API

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
export async function createPasswordApi(userData: CreatePasswordUserData) {
  try {
    const response = await axios.post(`${BASE_URL}/create-password`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function verifyApi(userData: VerifyUserData) {
  try {
    const response = await axios.post(`${BASE_URL}/verify`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// GET API

export async function getUserDataApi(token: string) {
  try {
    const response = await axios.get(`${BASE_URL}/user-data`, {
      headers: {
        'x-auth-token': token, // Include the JWT token in the request header
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}