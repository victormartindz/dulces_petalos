import ProductList from '../components/ProductList/ProductList';
import { useProducts } from '../hooks/useProducts';

export default function Home() {
  const products = useProducts();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
