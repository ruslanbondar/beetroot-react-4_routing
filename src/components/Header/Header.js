import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contactMUI">ContactMUI</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </header>
  );
};
