import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';
import ProductList from './ProductList';
import { Product } from '../../types/product';
import { MemoryRouter } from 'react-router-dom';

describe('ProductList Component', () => {
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Rosa',
      binomialName: 'Rosa rubiginosa',
      price: 12.5,
      imgUrl: '/rosa.jpg',
      wateringsPerWeek: 3,
      fertilizerType: 'nitrogen',
      heightInCm: 45,
    },
    {
      id: '2',
      name: 'Lirio',
      binomialName: 'Lilium candidum',
      price: 15,
      imgUrl: '/lirio.jpg',
      wateringsPerWeek: 2,
      fertilizerType: 'phosphorus',
      heightInCm: 50,
    },
  ];

  test('renders all products when search is empty', () => {
    render(
      <MemoryRouter>
        <ProductList products={mockProducts} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Rosa/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Lirio/i })).toBeInTheDocument();
  });

  test('filters products based on search input', () => {
    render(
      <MemoryRouter>
        <ProductList products={mockProducts} />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Buscar producto.../i);
    fireEvent.change(searchInput, { target: { value: 'rosa' } });

    expect(screen.getByRole('heading', { name: /Rosa/i })).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: /Lirio/i })
    ).not.toBeInTheDocument();
  });
});
