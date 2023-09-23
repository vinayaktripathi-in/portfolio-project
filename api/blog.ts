import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://portfolio-project-backend-pi.vercel.app";

interface postBlogUserData {
  // title: string;
  // content: string;
  // category: string;
  // coverImage: File | null;
}
// interface getBlogUserData {
//   id: string;
// }
// interface likeBlogUserData {
//   id: string;
// }

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
export async function getBlogApi(token: string, blogId: string | null) {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/get-blog/${blogId}`,
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
export async function likeBlogApi(token: string, blogId: string | null) {
  try {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}/like-blog/${blogId}/like`,
      {},
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
