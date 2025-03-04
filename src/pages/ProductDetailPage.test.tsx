import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import productsReducer from '../redux/productsSlice';
import ProductDetailPage from './ProductDetailPage';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  preloadedState: {
    products: {
      items: [
        {
          id: '1',
          name: 'Test Product',
          binomialName: 'Test binomial',
          price: 10,
          imgUrl: '/test.jpg',
          wateringsPerWeek: 2,
          fertilizerType: 'Test',
          heightInCm: 30,
        },
      ],
    },
  },
});

describe('ProductDetailPage Component', () => {
  test('renders product detail for given id', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/1']}>
          <Routes>
            <Route path='/product/:id' element={<ProductDetailPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByRole('heading', { name: /Test Product/i })
    ).toBeInTheDocument();
  });
});
