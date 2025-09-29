import axios from 'axios';
import { productType, CreateProductType, UpdateProductType } from '@/types/product';

const API_BASE_URL = '/api/products';

// GET - Alle producten ophalen
export const getProducts = async (): Promise<productType[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

// GET - Specifiek product ophalen
export const getProduct = async (id: number): Promise<productType> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// POST - Nieuw product aanmaken
export const createProduct = async (product: CreateProductType): Promise<productType> => {
  const response = await axios.post(API_BASE_URL, product);
  return response.data;
};

// PUT - Product bijwerken
export const updateProduct = async (id: number, product: UpdateProductType): Promise<productType> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, product);
  return response.data;
};

// DELETE - Product verwijderen
export const deleteProduct = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
