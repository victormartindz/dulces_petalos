import styles from './ProductGrid.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../types/product';

interface ProductGridProps {
  readonly products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.gridItem}>
          <ProductCard
            name={product.name}
            scientificName={product.scientificName}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
