import productsReducer, { setProducts } from './productsSlice';
import { Product } from '../types/product';

describe('productsSlice', () => {
  const initialState = { items: [] as Product[] };

  test('should return the initial state', () => {
    expect(productsReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState
    );
  });

  test('should handle setProducts', () => {
    const products: Product[] = [
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
    const nextState = productsReducer(initialState, setProducts(products));
    expect(nextState.items).toEqual(products);
  });
});
