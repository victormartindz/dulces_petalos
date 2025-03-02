import ProductDetail from '../components/ProductDetail/ProductDetail';
import { useProducts } from '../hooks/useProducts';

export default function ProductDetailPage() {
  const products = useProducts();

  return <ProductDetail products={products} />;
}
