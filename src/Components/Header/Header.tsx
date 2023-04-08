import React from 'react';
import styles from './Header.module.css';
import useTheme, { Themes } from '../../Hooks/useTheme';
const Header = () => {
  const { setTheme } = useTheme();
  const handleSetTheme = (theme: Themes) => {
    setTheme(theme);
  };
  // const toggleThemell = () => {
  //   const currentTheme = localStorage.getItem('themePreference');
  //   if (currentTheme === 'light') {
  //     localStorage.setItem('themePreference', 'dark');
  //   } else {
  //     localStorage.setItem('themePreference', 'light');
  //   }
  // };
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contaxt</a>
      </nav>
      <button onClick={() => handleSetTheme('light')}>Light</button>
      <button onClick={() => handleSetTheme('dark')}>Dark</button>
      <button onClick={() => handleSetTheme('automatic')}>Automatic</button>
      <button>Login</button>
    </header>
  );
};

export default Header;
