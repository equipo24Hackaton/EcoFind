import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:8000',
});

export const fetchProducts = async (searchQuery) => { // Agrega el parámetro searchQuery
  try {
    const response = await apiService.get(
      searchQuery === ""
        ? "/products"
        : `/products/search/${searchQuery}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};
