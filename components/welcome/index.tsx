import { Section } from "../layout";
import { Button } from "../base";
import Image, { StaticImageData } from "next/image";

import { imagesList } from "./images";
import styles from "./index.module.scss";

const Sneakers = ({ image }: { image: StaticImageData }) => {
  const { src, width, height } = image;

  return (
    <div className={styles.card}>
      <Image src={src} width={width} height={height} alt="" />
    </div>
  );
};

export const Welcome = () => {
  const lists = [
    imagesList.filter((_, i) => i < 5),
    imagesList.filter((_, i) => i > 4 && i < 10),
    imagesList.filter((_, i) => i > 9),
  ];

  return (
    <Section>
      <div className={styles.wrapper}>
        <div className={styles.sneakersWrapper}>
          {lists.map((list, i) => (
            <div key={i} className={styles.sneakersList}>
              {list.map((image, j) => (
                <Sneakers key={j} image={image} />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.about}>
          <div className={`${styles.infoBlock} ${styles.delivery}`}>
            <h3>Доставка</h3>
            <p>
              Бесплатная доставка по г.Москва +25км от МКАД; Доставка по РФ в
              удобный пункт СДЕК
            </p>
          </div>

          <div className={`${styles.infoBlock} ${styles.payment}`}>
            <h3>Оплата</h3>
            <p>
              Бесплатная доставка по г.Москва +25км от МКАД; Доставка по РФ в
              удобный пункт СДЕК
            </p>
          </div>

          <div className={`${styles.infoBlock} ${styles.note}  hide-mobile`}>
            <h3>Про нас</h3>
            <p>Мы работаем исключительно с оригинальной продукцией</p>
          </div>
        </div>

        <div className="show-mobile">
          <Button>Купить Yeezy</Button>
        </div>
      </div>
    </Section>
  );
};
