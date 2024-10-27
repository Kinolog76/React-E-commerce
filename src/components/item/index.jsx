import styles from "./Item.module.css";

function Item(props) {
  return (
    <div className={styles.item}>
      <img src={props.image} alt="item" />
      <p>{props.name}</p>
      <div className={styles.item_prices}>
        <div className={styles.item_price_new}>${props.new_price}</div>
        <div className={styles.item_price_old}><s>${props.old_price}</s></div>
      </div>
    </div>
  );
}

export default Item;
