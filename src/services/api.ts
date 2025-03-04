import { Product } from '../types/product';

const BASE_URL = '/api/v1';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/product`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${BASE_URL}/product/${id}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}
