import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/orders/';

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
};

export const placeOrder = async (orderData) => {
  const response = await axios.post(API_URL, orderData, getAuthHeaders());
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(API_URL, getAuthHeaders());
  return response.data;
};
