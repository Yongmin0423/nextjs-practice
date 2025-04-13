import styles from "./page.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>ABOUT US</h3>
        <p>
          Welcome to the official explorer for The New York Times Best Seller
          list explorer.
        </p>
        <p>We hope you enjoy your stay!</p>
      </div>
    </div>
  );
}
