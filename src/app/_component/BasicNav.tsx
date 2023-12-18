import styles from './BasicNav.module.css';
import Link from 'next/link';

export default function BasicNav() {
  return (
    <div className={styles.nav}>
      <li className={styles.navList}>
        <Link href="/home">Home</Link>
        <Link href="/visitor">Visitor</Link>
      </li>
    </div>
  );
}
