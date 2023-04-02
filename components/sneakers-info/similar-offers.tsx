import { useScreenSize } from "../../utils/useScreenSize";
import { CatalogItem } from "../../lib/types";
import { Card } from "../card";

import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Scrollbar } from "swiper";

interface SimilarOffersProps {
  catalogList: CatalogItem[];
}

export const SimilarOffers = ({ catalogList }: SimilarOffersProps) => {
  const { isTablet } = useScreenSize();

  if (catalogList.length === 0) return null;

  return (
    <div className={styles.similarOffers}>
      <h2 className={styles.subtitle}>Похожие предложения</h2>

      <div className={styles.similarOffersSliderWrapper}>
        {isTablet ? (
            <ul className={styles.list}>
              {catalogList.map((item) => (
                <li key={item.id}>
                  <Card item={item} />
                </li>
              ))}
            </ul>
        ) : (
          <Swiper
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            modules={[Scrollbar]}
            slidesPerView={"auto"}
            spaceBetween={20}
            className="swiper-similar-catalog-global"
          >
            {catalogList.map((item) => (
              <SwiperSlide key={item.id} className="similar-catalog-slide">
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
