import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://portfolio-project-backend-pi.vercel.app";

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
interface postBlogUserData {
  title: string;
  content: string;
  coverImage: File | null;
}
interface getBlogUserData {
  id: string;
}

// POST API

export async function signUpApi(userData: SignUpUserData) {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    if (response.status === 200) {
      // User registered successfully
      return response.data;
    } else if (response.status === 409) {
      // User is already registered
      throw new Error("User is already registered");
    } else {
      // Handle other status codes as needed
      throw new Error("Registration failed");
    }
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
    const response = await axios.post(`${BASE_URL}/otp-verify`, userData);
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
        "x-auth-token": token, // Include the JWT token in the request header
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function postBlogApi(userData: postBlogUserData, token: string) {
  try {
    const response = await axios.post(`${BASE_URL}/create-blog`, userData, {
      headers: {
        "x-auth-token": token, // Include the JWT token in the request header
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getBlogsApi(token: string) {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/get-all-blogs`,
      {
        headers: {
          "x-auth-token": token, // Include the JWT token in the request header
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function getBlogApi(token: string, id: string | null) {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/get-blog/${id}`,
      {
        headers: {
          "x-auth-token": token, // Include the JWT token in the request header
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
