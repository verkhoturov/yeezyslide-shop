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
              Работает курьерская доставка по Москве и МО. По всей территории РФ
              работает доставка почтой
            </p>
          </div>

          <div className={`${styles.infoBlock} ${styles.payment}`}>
            <h3>Оплата</h3>
            <p>
              Бесплатная доставка по г.Москва +25км от МКАД; <br /> Доставка по
              РФ в удобный пункт СДЕК
            </p>
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
