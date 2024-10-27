import Item from "../item";
import styles from "./Popular.module.css";
import data_product from "../assets/data";

function Popular() {
  return (
    <div className={styles.popular}>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className={styles.popular_item}>
        {data_product.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
