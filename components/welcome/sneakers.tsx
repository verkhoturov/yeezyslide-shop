import React from "react";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "../../utils/useScreenSize";
import { imagesList } from "./images/mobile";

import {
  slideSideImageList,
  slideFaceImageList,
  slideBackImageList,
  slideOneImageList,
  slideBottomImageList,
} from "./images/slide";

import {
  runnerSideImageList,
  runnerFaceImageList,
  runnerBackImageList,
  runnerOneImageList,
  runnerBottomImageList,
} from "./images/runner";

import {
  adiletteSideImageList,
  adiletteFaceImageList,
  adiletteBackImageList,
  adiletteOneImageList,
  adiletteBottomImageList,
} from "./images/adilette";

import styles from "./sneakers.module.scss";

const list = [
  [
    slideSideImageList,
    slideFaceImageList,
    slideBackImageList,
    slideOneImageList,
    slideBottomImageList,
  ],
  [
    runnerSideImageList,
    runnerFaceImageList,
    runnerBackImageList,
    runnerOneImageList,
    runnerBottomImageList,
  ],
  [
    adiletteSideImageList,
    adiletteFaceImageList,
    adiletteBackImageList,
    adiletteOneImageList,
    adiletteBottomImageList,
  ],
];

const mobileLists = [
  imagesList.filter((_, i) => i < 5),
  imagesList.filter((_, i) => i > 4 && i < 10),
  imagesList.filter((_, i) => i > 9),
];

const Sneakers = ({ images }: { images: StaticImageData[] }) => {
  const [isHover, setHover] = React.useState(false);

  return (
    <div
      className={`${styles.card} ${isHover ? `${styles.cardHover}` : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          width={img.width}
          height={img.height}
          alt=""
          style={{ zIndex: 100 - i }}
          priority={i == 0}
        />
      ))}
    </div>
  );
};

const SneakersMobile = ({ image }: { image: StaticImageData }) => {
  const { src, height, width } = image;

  return (
    <div className={styles.card}>
      <Image src={src} width={width} height={height} alt="" />
    </div>
  );
};

export const SneakersPepresent = () => {
  const { isTablet } = useScreenSize();
  return (
    <div className={styles.sneakersWrapper}>
      {isTablet ? (
        <>
          {mobileLists.map((images, i) => (
            <div key={i} className={styles.sneakersList}>
              {images.map((img, j) => (
                <SneakersMobile key={j} image={img} />
              ))}
            </div>
          ))}
        </>
      ) : (
        <>
          {list.map((row, i) => (
            <div key={i} className={styles.sneakersList}>
              {row.map((images, j) => (
                <Sneakers key={j} images={images} />
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
