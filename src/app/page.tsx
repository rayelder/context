'use client';

import Link from '@/lib/components/Link';
import styles from './page.module.css';
import Button from '@/lib/components/Button';
import ButtonGroup from '@/lib/components/ButtonGroup';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Components</h1>
        <h2>Button </h2>
        <Button label="Sign in" isPill />
        <h2>Link</h2>
        <Link label="Browse contacts" />
        <h2>ButtonGroup</h2>
        <ButtonGroup>
          <Button label="Sign in" isPill />
          <Link label="Browse contacts" />
        </ButtonGroup>
      </main>
    </div>
  );
}
