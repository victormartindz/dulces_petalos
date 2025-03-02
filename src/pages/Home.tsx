import ProductList from '../components/ProductList/ProductList';
import { useProducts } from '../hooks/useProducts';

export default function Home() {
  const products = useProducts();

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ProductList products={products} />
    </div>
  );
}
