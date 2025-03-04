import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';
import { store } from './redux/store';

describe('App Component', () => {
  test('renders header on all routes', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders Home component for "/" route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/dulces/i)).toBeInTheDocument();
  });

  test('renders ProductDetailPage for "/product/:id" route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/1']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const productTitle = screen.queryByRole('heading', { name: /producto/i });
    const notFoundMessage = screen.queryByText(/producto no encontrado/i);

    expect(productTitle || notFoundMessage).toBeInTheDocument();
  });

  test('renders 404 for unknown route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/ruta-que-no-existe']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/página no encontrada/i)).toBeInTheDocument();
  });
});
