import React from 'react';
import styles from './styles.module.css';

import githubLogo from '../../assets/github.svg';

const Header = () => {
  return (
    <header>
      <div className={`${styles.header} container`}>
        <h1 className={styles.title}>DSMovie</h1>
        <a className={styles.button} href="https://github.com/luanargolodev">
          <img src={githubLogo} alt="Github" />
          <a>/luanargolodev</a>
        </a>
      </div>
    </header>
  );
};

export default Header;
