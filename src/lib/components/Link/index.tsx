import styles from './Link.module.css';

export default function Link({ label }: { label: string }) {
  return (
    <a href="#" className={styles.base}>
      {label}
    </a>
  );
}
