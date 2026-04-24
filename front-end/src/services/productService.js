import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL + "products/" : "http://127.0.0.1:8000/api/products/";

export const getProducts = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}
