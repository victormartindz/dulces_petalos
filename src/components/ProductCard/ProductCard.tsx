import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  scientificName: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  name,
  scientificName,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{scientificName}</p>
      <p>${price}</p>
    </div>
  );
}
