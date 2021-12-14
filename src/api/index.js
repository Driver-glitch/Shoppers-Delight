import axios from "axios";
import { getToken, storeToken, storeUser } from "../auth";
const BASE = "http://localhost:5000/api";
// this is an example for an api call with axios
export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password,
    });
    storeToken(data.token);
    storeUser(data.user.username);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password,
    });
    console.log(data);
    storeToken(data.token);
    storeUser(data.user.username);
    console.log(data.token);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function getAllProducts() {
  try {
    const { data } = await axios.get(`api/products`);
    console.log('get all prod', data)
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getSingleProduct(id) {
  console.log('get single prod', id)
  try {
    const { data } = await axios.get(`${BASE}/products/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}
