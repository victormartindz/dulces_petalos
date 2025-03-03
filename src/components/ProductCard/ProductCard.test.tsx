// ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const props = {
    name: 'Rosa',
    binomialName: 'Rosa rubiginosa',
    price: 19.99,
    imgUrl: '/test-image.jpg',
  };

  test('renders product card with correct information', () => {
    render(<ProductCard {...props} />);

    const imgElement = screen.getByAltText(props.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', props.imgUrl);

    const nameElement = screen.getByRole('heading', { name: props.name });
    expect(nameElement).toBeInTheDocument();

    const binomialElement = screen.getByText(props.binomialName);
    expect(binomialElement).toBeInTheDocument();

    const priceElement = screen.getByText(`$${props.price}`);
    expect(priceElement).toBeInTheDocument();
  });
});
