import { Button } from "../base";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

interface Item {
  slug: string;
  title: string;
  previewImg: string;
  price: number;
  discount: number | null;
  inStock: boolean;
}

interface CardProps {
  item: Item;
}

export const Card = ({ item }: CardProps) => {
  const { slug, title, discount, price, previewImg, inStock } = item;
  const priceFmt = price.toLocaleString("ru-RU");

  const currentPrice = (
    discount ? (price * (100 - discount)) / 100 : price
  ).toLocaleString("ru-RU");

  return (
    <Link
      href={`/catalog/${slug}`}
      className={`${styles.container}`}
    >
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.inStock}>
          {inStock ? "Есть на складе" : "Нет на складе"}
        </span>
      </div>

      {discount && <div className={styles.discount}>-{discount}%</div>}

      <div className={styles.imgWrapper}>
        <Image src={previewImg} height={198} width={330} alt={title} />
      </div>

      <div className={styles.bottom}>
        <div className={styles.price}>
          {discount && <span className={styles.full}>{priceFmt} ₽</span>}
          <span className={styles.current}>{currentPrice} ₽</span>
        </div>
        <Button size="small" disabled={!inStock}>
          Купить
        </Button>
      </div>
    </Link>
  );
};
