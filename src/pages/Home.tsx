import ProductList from '../components/ProductList/ProductList';
import { useProducts } from '../hooks/useProducts';

export default function Home() {
  const products = useProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
