import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { describe, expect, test, vi } from 'vitest';
import { useProducts } from './useProducts';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../redux/productsSlice';
import * as api from '../services/api';
import { Product } from '../types/product';

const createStore = () =>
  configureStore({
    reducer: {
      products: productsReducer,
    },
  });

describe('useProducts hook', () => {
  test('loads products when state is empty', async () => {
    const store = createStore();

    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Test Product',
        binomialName: 'Test Binomial',
        price: 10,
        imgUrl: '/test.jpg',
        wateringsPerWeek: 2,
        fertilizerType: 'Test Fertilizer',
        heightInCm: 30,
      },
    ];

    const fetchProductsSpy = vi
      .spyOn(api, 'fetchProducts')
      .mockResolvedValueOnce(mockProducts);

    const { result } = renderHook(() => useProducts(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    await waitFor(() => {
      expect(result.current).toEqual(mockProducts);
    });

    fetchProductsSpy.mockRestore();
  });
});
