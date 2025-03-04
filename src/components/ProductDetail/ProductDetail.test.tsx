import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ProductDetail Component', () => {
  const mockProducts = [
    {
      id: '1',
      name: 'Planta 1',
      binomialName: 'Planta ejemplo',
      price: 10,
      imgUrl: '/image1.jpg',
      wateringsPerWeek: 3,
      fertilizerType: 'nitrogen',
      heightInCm: 50,
    },
  ];

  test('renders error when no product is found', () => {
    render(
      <MemoryRouter initialEntries={['/product/2']}>
        <Routes>
          <Route
            path='/product/:id'
            element={<ProductDetail products={mockProducts} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Producto no encontrado/i)).toBeInTheDocument();
  });

  test('renders product detail when product is found', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route
            path='/product/:id'
            element={<ProductDetail products={mockProducts} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /Planta 1/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Planta ejemplo/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10/)).toBeInTheDocument();
  });

  test('calls navigate(-1) when back button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route
            path='/product/:id'
            element={<ProductDetail products={mockProducts} />}
          />
        </Routes>
      </MemoryRouter>
    );

    const backButton = screen.getByRole('button', { name: /Volver/i });
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
