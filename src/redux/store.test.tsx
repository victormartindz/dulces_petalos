import { store } from './store';
import { setProducts } from './productsSlice';
import { Product } from '../types/product';

describe('store', () => {
  test('should update products state when setProducts is dispatched', () => {
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
    store.dispatch(setProducts(products));
    const state = store.getState();
    expect(state.products.items).toEqual(products);
  });
});
