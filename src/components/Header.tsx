import React from 'react';
import igniteLogo from "../assets/Ignite-logo.svg";
import styles from './Header.module.css';
export const Header: React.FC = () => {
  return (
      <div className={styles.header}>
        <span>
            <img src={igniteLogo} alt="logotipo do ignite feed" />
        </span>
        Ignite Feed
    </div>
  );
}
