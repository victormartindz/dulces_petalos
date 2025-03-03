import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import '@testing-library/jest-dom';
import { Product } from '../../types/product';

describe('ProductGrid Component', () => {
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Planta A',
      binomialName: 'Planta A binomial',
      price: 20,
      imgUrl: '/plantaA.jpg',
      wateringsPerWeek: 2,
      fertilizerType: 'nitrogen',
      heightInCm: 30,
    },
    {
      id: '2',
      name: 'Planta B',
      binomialName: 'Planta B binomial',
      price: 30,
      imgUrl: '/plantaB.jpg',
      wateringsPerWeek: 3,
      fertilizerType: 'phosphorus',
      heightInCm: 40,
    },
  ];

  test('renders correct number of product cards', () => {
    render(
      <MemoryRouter>
        <ProductGrid products={mockProducts} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockProducts.length);
  });

  test('each link has the correct href attribute', () => {
    render(
      <MemoryRouter>
        <ProductGrid products={mockProducts} />
      </MemoryRouter>
    );

    mockProducts.forEach((product) => {
      const linkElement = screen.getByRole('link', {
        name: new RegExp(product.name, 'i'),
      });
      expect(linkElement).toHaveAttribute('href', `/product/${product.id}`);
    });
  });
});
