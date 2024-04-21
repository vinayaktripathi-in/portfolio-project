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
interface commentBlogUserData {
  blogId: string;
  text: string;
}

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

export async function getBlogsApi() {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/get-all-blogs`
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
      `${BASE_URL}/like-blog/${blogId}`,
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
export async function likedByBlogApi(token: string, blogId: string | null) {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/liked-by-blog/${blogId}`,
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
export async function commentBlogApi(
  token: string,
  blogId: string | null,
  text: string
) {
  try {
    const response = await axios.post(
      `${BASE_URL}/comment-blog/${blogId}`,
      { text },
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
export async function commentedByBlogApi(token: string, blogId: string | null) {
  try {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/get-comments-blog/${blogId}`,
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
