import React from 'react';
import styles from './LandingFeatures.module.css';
import * as Tabs from '@radix-ui/react-tabs';

const values = [1, 2, 3, 4];

const LandingFeatures = () => {
  return (
    <section>
      <FeatureTab />
    </section>
  );
};

const test = ['1', '2', '3', '4'];
const FeatureTab = () => (
  <Tabs.Root className={styles.root} orientation='vertical' defaultValue='1'>
    <Tabs.List className={styles.list}>
      <Tabs.Trigger className={styles.button} value='1' />
      <Tabs.Trigger className={styles.button} value='2' />
      <Tabs.Trigger className={styles.button} value='3' />
      <Tabs.Trigger className={styles.button} value='4' />
    </Tabs.List>
    {test.map((t, ind) => {
      return (
        <Tabs.Content className={styles.content} value={(ind + 1).toString()}>
          <div>This is the {t} tab</div>
        </Tabs.Content>
      );
    })}
  </Tabs.Root>
);

export default LandingFeatures;
