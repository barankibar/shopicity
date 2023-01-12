import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export const login = async (username, password) => {
  const res = await axios.post(API_URL + "login", {
    username,
    password,
  });
  if (res.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
