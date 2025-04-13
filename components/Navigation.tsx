import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
