import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
}

export default function ProductCard({
  name,
  binomialName,
  price,
  imgUrl,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{binomialName}</p>
      <p>${price}</p>
    </div>
  );
}
