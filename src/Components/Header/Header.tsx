import React from 'react';
import styles from './Header.module.css';
import useTheme, { Themes } from '../../Hooks/useTheme';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import ThemeDropdown from './ThemeDropdown';
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contaxt</a>
      </nav>
      <ThemeDropdown />
      <button>Login</button>
    </header>
  );
};
export default Header;
