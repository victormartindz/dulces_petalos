import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import ProductGrid from '../ProductGrid/ProductGrid';
import styles from './ProductList.module.css';
import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [search, setSearch] = useState('');

  const fuse = useMemo(() => {
    return new Fuse(products, {
      keys: ['name', 'binomialName'],
      includeScore: true,
      threshold: 0.4,
    });
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!search.trim()) {
      return products;
    }
    const result = fuse.search(search);
    return result.map((resultItem) => resultItem.item);
  }, [search, fuse, products]);

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
