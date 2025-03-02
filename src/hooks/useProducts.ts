import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productsSlice';
import { RootState } from '../redux/store';
import { fetchProducts } from '../services/api';

export function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data.length > 0) {
          dispatch(setProducts(data));
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (products.length === 0) {
      loadProducts();
    }
  }, [dispatch, products.length]);

  return products;
}
