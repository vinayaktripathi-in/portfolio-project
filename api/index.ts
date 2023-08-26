import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

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
