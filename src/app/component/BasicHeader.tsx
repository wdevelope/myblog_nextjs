import styles from './BasicHeader.module.css';
import Link from 'next/link';

export default function BasicHeader() {
  return (
    <div className={styles.header}>
      <Link href="/home">
        <h2>w-life blog</h2>
      </Link>
      <div className={styles.LoginRegisterDiv}>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}
