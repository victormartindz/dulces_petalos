import React from 'react';
import styles from './Header.module.css';
import reactLogo from '../../assets/images/react.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='logo' alt='React logo' />
      </a>
      <h1 className='title'>Dulces Pétalos</h1>
    </header>
  );
};

export default Header;
