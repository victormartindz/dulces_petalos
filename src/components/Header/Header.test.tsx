import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders header with logo and title', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();

    const logoImg = screen.getByAltText(/Cherry Blossom logo/i);
    expect(logoImg).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: /dulces pétalos/i });
    expect(title).toBeInTheDocument();
  });
});
