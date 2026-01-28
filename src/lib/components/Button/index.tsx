'use client';

import styles from './Button.module.css'

export default function Button({ label, isPill = true }: { label: string; isPill: boolean }) {
  return (
	<button className={isPill ? styles.pill : styles.rounded}>
	  {label}
	</button>
  );
}