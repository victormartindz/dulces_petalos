import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { Product } from '../../types/product';

interface ProductDetailProps {
  products: Product[];
}

export default function ProductDetail({ products }: ProductDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className={styles.detail}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Volver
      </button>
      <div className={styles.container}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.image}
        />
        <div className={styles.description}>
          <h2>{product.name}</h2>
          <p>
            <strong>Nombre científico:</strong> {product.scientificName}
          </p>
          <p>
            <strong>Precio:</strong> ${product.price}
          </p>
          <p>
            <strong>Riegos por semana:</strong> {product.waterPerWeek}
          </p>
          <p>
            <strong>Fertilizante recomendado:</strong> {product.fertilizer}
          </p>
          <p>
            <strong>Altura:</strong> {product.height} cm
          </p>
        </div>
      </div>
    </div>
  );
}
