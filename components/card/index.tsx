import { LinkButton } from "../base";
import Image, { StaticImageData } from "next/image";
import styles from "./index.module.scss";

interface Item {
  id: number;
  title: string;
  img: StaticImageData;
  price: number;
  discount: number | null;
  inStock: boolean;
}

interface CardProps {
  item: Item;
}

export const Card = ({ item }: CardProps) => {
  const { title, discount, price, img, inStock } = item;
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.inStock}>
          {inStock ? "Есть на складе" : "отсутствует"}
        </span>
      </div>

      {discount && <div className={styles.discount}>-{discount}%</div>}

      <div className={styles.imgWrapper}>
        <Image
          src={img.src}
          height={img.height}
          width={img.width}
          alt={title}
        />
      </div>

      <div className={styles.bottom}>
        <div className={styles.price}>
          <span className={styles.full}>{price} ₽</span>
          <span className={styles.current}>{price} ₽</span>
        </div>
        <LinkButton href="/">Купить</LinkButton>
      </div>
    </div>
  );
};
