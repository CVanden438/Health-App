import React from 'react';
import LandingHero from '../Components/Landing/Hero/LandingHero';
import LandingFeatures from '../Components/Landing/Features/LandingFeatures';
import styles from './Landing.module.css';
export const Landing = () => {
  return (
    <main className={styles.landing}>
      <LandingHero />
      <LandingFeatures />
    </main>
  );
};
