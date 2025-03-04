import styles from './ProductCard.module.css';

interface ProductCardProps {
  readonly name: string;
  readonly binomialName: string;
  readonly price: number;
  readonly imgUrl: string;
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
