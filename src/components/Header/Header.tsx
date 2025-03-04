import styles from './Header.module.css';
import logo from '../../assets/images/blossom-cherry.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} alt='Cherry Blossom logo' />
      </div>
      <h1 className={styles.title}>Dulces Pétalos</h1>
    </header>
  );
};

export default Header;
