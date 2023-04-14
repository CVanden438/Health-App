import React from 'react';
import styles from './Header.module.css';
import useTheme, { Themes } from '../../Hooks/useTheme';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import ThemeDropdown from './ThemeDropdown';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to='/'>LOGO</Link>
      </h1>
      {/* <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contaxt</a>
      </nav> */}
      <ThemeDropdown />
      <Link to='/login'>Login</Link>
    </header>
  );
};
export default Header;
