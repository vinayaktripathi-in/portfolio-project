export * from "./auth";
export * from "./blog";

import axios from "axios";

const BASE_URL = "https://portfolio-project-backend-pi.vercel.app";

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
