import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import productsReducer from '../redux/productsSlice';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

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

describe('Home Component', () => {
  test('renders ProductList with products', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
  });
});
