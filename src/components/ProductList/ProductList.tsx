import { useState } from 'react';
import ProductGrid from '../ProductGrid/ProductGrid';
import styles from './ProductList.module.css';
import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.scientificName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Buscar producto...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
