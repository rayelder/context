import Button from '../Button';
import Link from '../Link';

import styles from './ButtonGroup.module.css';

export default function ButtonGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.base}>{children}</div>;
}
