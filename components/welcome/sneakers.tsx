import React from "react";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "../../utils/useScreenSize";

import styles from "./sneakers.module.scss";

import {
  slideGifImages,
  adiletteGifImages,
  runnerGifImages,
} from "./gif-images";
import { slideImages, adiletteImages, runnerImages } from "./images";

const slideList = slideImages.map((img, i) => [img, slideGifImages[i]]);
const adiletteList = adiletteImages.map((img, i) => [
  img,
  adiletteGifImages[i],
]);
const runnerList = runnerImages.map((img, i) => [img, runnerGifImages[i]]);

const Sneakers = ({
  img,
  gif,
}: {
  img: StaticImageData;
  gif: StaticImageData;
}) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.gif}
        src={gif.src}
        width={img.width}
        height={img.height}
        alt=""
      />
      <Image
        className={styles.image}
        src={img.src}
        width={img.width}
        height={img.height}
        alt=""
        priority
      />
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
          <div className={styles.sneakersList}>
            {adiletteImages.map((image, i) => (
              <SneakersMobile key={i} image={image} />
            ))}
          </div>
          <div className={styles.sneakersList}>
            {runnerImages.map((image, i) => (
              <SneakersMobile key={i} image={image} />
            ))}
          </div>
          <div className={styles.sneakersList}>
            {slideImages.map((image, i) => (
              <SneakersMobile key={i} image={image} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.sneakersList}>
            {adiletteList.map((pair, i) => (
              <Sneakers key={i} img={pair[0]} gif={pair[1]} />
            ))}
          </div>
          <div className={styles.sneakersList}>
            {runnerList.map((pair, i) => (
              <Sneakers key={i} img={pair[0]} gif={pair[1]} />
            ))}
          </div>
          <div className={styles.sneakersList}>
            {slideList.map((pair, i) => (
              <Sneakers key={i} img={pair[0]} gif={pair[1]} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
