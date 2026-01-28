'use client';

import styles from './Button.module.css'

export default function Button({ label }: { label: string }) {
  return (
	<button className={styles.base}>
	  {label}
	</button>
  );
}