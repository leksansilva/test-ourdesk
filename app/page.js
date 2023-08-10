import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table
          pricing-table-id="prctbl_1NdbrME8exeQ2sflDN0lFFKx"
          publishable-key="pk_test_51NdbjiE8exeQ2sfl8WRpx5BIKZbi6dXN8xMqMnYEbuwFMS5xt3EipVZsZOhpRYJtca0Wm3rKYpXb4IZuDG9bz65B00bzNBWYqK"
        ></stripe-pricing-table>
      </div>
      <iframe
        className={styles.main}
        src="https://sales-frontend.bigdelivery-staging.avantsoft.com.br/"
      ></iframe>
    </div>
  );
}
