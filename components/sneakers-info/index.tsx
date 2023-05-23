import React from "react";
import { Button } from "../base";
import Image from "next/image";
import { Section } from "../layout";
import { CatalogItem } from "../../lib/types";

import { OrderModal } from "../order";

import { SimilarOffers } from "./similar-offers";

import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

const defaultSizes = [
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
];

interface SneakersInfoProps {
  item?: CatalogItem;
  catalogList: CatalogItem[];
}

export const SneakersInfo = ({ item, catalogList }: SneakersInfoProps) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);

  const similarItemsList = React.useMemo(() => {
    if (item) {
      return catalogList.filter(
        (catalogItem) =>
          catalogItem.model === item.model && catalogItem.id !== item.id
      );
    }
    return [];
  }, [catalogList, item]);

  if (!item) return null;

  const {
    title,
    article,
    color,
    releaseDate,
    composition,
    inStock,
    sizes,
    price,
    discount,
    gallery,
    preOrder,
  } = item;

  const priceFmt = price.toLocaleString("ru-RU");

  const currentPrice = (
    discount ? (price * (100 - discount)) / 100 : price
  ).toLocaleString("ru-RU");

  return (
    <Section isBgColor>
      <div className={styles.container}>
        {discount && <div className={styles.discount}>-{discount}%</div>}

        <div className={styles.row}>
          <div className={styles.sliderCol}>
            <Swiper
              navigation
              pagination={{ clickable: true }}
              loop
              modules={[Navigation, Pagination]}
              className="swiper-gallery-global"
            >
              {gallery.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.imgWrapper}>
                    <Image src={img} width={833} height={500} alt={title} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.infoCol}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{title}</h1>

              <div className={styles.priceWrapper}>
                <p className={styles.price}>
                  {discount && (
                    <span className={styles.fullPrice}>{priceFmt} ₽</span>
                  )}
                  <span>{currentPrice} ₽</span>
                </p>
              </div>
            </div>

            <dl className={styles.desc}>
              <div className={styles.descRow}>
                <dt>Артикул:</dt>
                <dd>{article}</dd>
              </div>

              <div className={styles.descRow}>
                <dt>Цвет:</dt>
                <dd>{color}</dd>
              </div>

              <div className={styles.descRow}>
                <dt>Дата релиза:</dt>
                <dd>{releaseDate}</dd>
              </div>

              <div className={styles.descRow}>
                <dt>Состав:</dt>
                <dd>{composition}</dd>
              </div>

              <div className={styles.descRow}>
                <dt>Склад:</dt>
                <dd>{inStock ? "Есть на складе" : "Нет на складе"}</dd>
              </div>
            </dl>

            <h2 className={styles.subtitle}>Доступные размеры</h2>

            <div className={styles.sizes}>
              {defaultSizes.map((s) => (
                <div
                  key={s}
                  className={!sizes.includes(s) ? styles.disabled : ""}
                >
                  {s} EU
                </div>
              ))}
            </div>

            <div className={`${styles.priceRow} hide-mobile`}>
              <p className={styles.price}>
                {discount && (
                  <span className={styles.fullPrice}>{priceFmt} ₽</span>
                )}
                <span>{currentPrice} ₽</span>
              </p>

              <Button
                onClick={() => setIsOrderModalOpen(true)}
                size="small"
                disabled={preOrder ? false : !inStock}
              >
                {preOrder ? "Предзаказ" : "Купить"}
              </Button>
            </div>

            <div className={`${styles.mobileBtn}`}>
              <Button
                onClick={() => setIsOrderModalOpen(true)}
                disabled={preOrder ? false : !inStock}
              >
                {preOrder ? "Предзаказ" : "Купить Yeezy"}
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.aboutRow}>
            <div className={`${styles.infoBlock} ${styles.delivery}`}>
              <h3>Доставка</h3>
              <p>
                Работает курьерская доставка по Москве и МО. По всей территории
                РФ работает доставка почтой
              </p>
            </div>

            <div className={`${styles.infoBlock} ${styles.payment}`}>
              <h3>Оплата</h3>
              <p>
                Бесплатная доставка по г.Москва +25км от МКАД; Доставка по РФ в
                удобный пункт СДЕК
              </p>
            </div>
          </div>

          <div className={`${styles.infoBlock} ${styles.sizesTable}`}>
            <h3>Таблица размеров</h3>
            <p>
              Будь внимателен: на бирке нет размера RU, поэтому, чтобы не
              запутаться, сверься по размеру EUR. (смотреть таблицу){" "}
            </p>
          </div>
        </div>

        <SimilarOffers catalogList={similarItemsList} />
      </div>

      {isOrderModalOpen && (
        <OrderModal
          productName={title}
          isPreOrder={preOrder}
          onClose={() => setIsOrderModalOpen(false)}
        />
      )}
    </Section>
  );
};
