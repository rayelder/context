'use client'

import styles from "./page.module.css";
import Button from "@/lib/components/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Button
            label="Call-to-action"
          />
      </main>
    </div>
  );
}