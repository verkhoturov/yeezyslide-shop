import { LinkButton } from "../base";
import Image from "next/image";
import styles from "./index.module.scss";

interface Item {
  id: number;
  title: string;
  img: string;
  price: number;
  discount: number | null;
  inStock: boolean;
}

interface CardProps {
  item: Item;
}

export const Card = ({ item }: CardProps) => {
  const { id, title, discount, price, img, inStock } = item;
  const priceFmt = price.toLocaleString("ru-RU");

  const currentPrice = (
    discount ? (price * (100 - discount)) / 100 : price
  ).toLocaleString("ru-RU");

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.inStock}>
          {inStock ? "Есть на складе" : "Нет на складе"}
        </span>
      </div>

      {discount && <div className={styles.discount}>-{discount}%</div>}

      <div className={styles.imgWrapper}>
        <Image
          src={img}
          height={320}
          width={200}
          alt={title}
        />
      </div>

      <div className={styles.bottom}>
        <div className={styles.price}>
          {discount && <span className={styles.full}>{priceFmt} ₽</span>}
          <span className={styles.current}>{currentPrice} ₽</span>
        </div>
        <LinkButton href={`/catalog/${id}`} disabled={!inStock}>
          Купить
        </LinkButton>
      </div>
    </div>
  );
};
