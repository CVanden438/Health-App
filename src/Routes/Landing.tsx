import React from 'react';
import LandingHero from '../Components/Landing/Hero/LandingHero';
import LandingBenefits from '../Components/Landing/Benefits/LandingBenefits';
import styles from './Landing.module.css';
import LandingFeatures from '../Components/Landing/Features/LandingFeatures';
import LandingTestemonials from '../Components/Landing/Testimonials/LandingTestemonials';
import LandingFooter from '../Components/Landing/Footer/LandingFooter';
export const Landing = () => {
  return (
    <>
      <main className={styles.landing}>
        <LandingHero />
        <LandingBenefits />
        <LandingFeatures />
        <LandingTestemonials />
      </main>
      <LandingFooter />
    </>
  );
};
