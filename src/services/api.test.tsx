import { fetchProducts, fetchProductById } from './api';
import {
  describe,
  expect,
  test,
  vi,
  beforeEach,
  afterEach,
  MockedFunction,
} from 'vitest';
import { Product } from '../types/product';

describe('API functions', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('fetchProducts returns products array on success', async () => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Test Product',
        binomialName: 'Test Binomial',
        price: 10,
        imgUrl: '/test.jpg',
        wateringsPerWeek: 2,
        fertilizerType: 'Test',
        heightInCm: 30,
      },
    ];

    (global.fetch as MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: async () => mockProducts,
    } as Response);

    const products = await fetchProducts();
    expect(products).toEqual(mockProducts);
  });

  test('fetchProducts returns empty array on error', async () => {
    (global.fetch as MockedFunction<typeof fetch>).mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    } as Response);

    const products = await fetchProducts();
    expect(products).toEqual([]);
  });

  test('fetchProductById returns product on success', async () => {
    const mockProduct: Product = {
      id: '1',
      name: 'Test Product',
      binomialName: 'Test Binomial',
      price: 10,
      imgUrl: '/test.jpg',
      wateringsPerWeek: 2,
      fertilizerType: 'Test',
      heightInCm: 30,
    };

    (global.fetch as MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: async () => mockProduct,
    } as Response);

    const product = await fetchProductById('1');
    expect(product).toEqual(mockProduct);
  });

  test('fetchProductById returns null on error', async () => {
    (global.fetch as MockedFunction<typeof fetch>).mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    } as Response);

    const product = await fetchProductById('nonexistent');
    expect(product).toBeNull();
  });
});
