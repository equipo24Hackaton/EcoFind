// apiService.js

import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:8000',
});

export const fetchProducts = async () => {
  try {
    const response = await apiService.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};