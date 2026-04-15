
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/";

export const register = (email, password) => {
  return axios.post(API_URL + "register/", {
    username: email, // Use full email as username to prevent conflicts
    email,
    password,
  });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "login/", {
      username: email, // Use full email to login 
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
        localStorage.setItem("email", email);
      }
      return response.data;
    });
};

