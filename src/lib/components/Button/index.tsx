'use client';

import styles from './Button.module.css'

export default function Button({ label, variant = "primary", isPill = false }: { label: string; variant?: "primary" | "secondary"; isPill?: boolean }) {
  return (
	<button className={`${isPill ? styles.pill : styles.rounded} ${styles[variant]}`}>
      {label}
	</button>
  );
}