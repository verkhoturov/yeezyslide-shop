import React from "react";
import { OrderModal } from "../order";
import { Section } from "../layout";
import { Button } from "../base";
import { SneakersPepresent } from "./sneakers";

import styles from "./index.module.scss";

export const Welcome = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  return (
    <Section>
      <h1 className="visually-hidden">yeezyslide_russia</h1>
      <div className={styles.wrapper}>
        <SneakersPepresent />

        <div className={styles.about}>
          <div className={`${styles.infoBlock} ${styles.delivery}`}>
            <h3>Доставка</h3>
            <p>
              Бесплатная доставка по г.Москва +25км от МКАД; Доставка по РФ в
              удобный пункт СДЕК
            </p>
          </div>

          <div
            className={`${styles.infoBlock} ${styles.payment}`}
            style={{ opacity: 0 }}
          >
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
          <div className={styles.btnWrapper}>
            <Button onClick={() => setIsOrderModalOpen(true)}>
              Купить Yeezy
            </Button>
          </div>
        </div>
      </div>

      {isOrderModalOpen && (
        <OrderModal onClose={() => setIsOrderModalOpen(false)} />
      )}
    </Section>
  );
};
