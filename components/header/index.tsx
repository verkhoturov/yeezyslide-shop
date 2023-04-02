import React from "react";
import { OrderModal } from "../order";
import Link from "next/link";
import styles from "./index.module.scss";

export const Header = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = React.useState(false);
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoCol}>
          <Link href={"/"} className={styles.text}>
            yeezyslide_russia
          </Link>
        </div>

        <div className={styles.socCol}>
          <div className={styles.soc}>
            <Link href={"/"}>vk</Link>
            <Link href={"/"}>tg</Link>
            <Link href={"/"}>inst</Link>
          </div>
        </div>

        <div className={`${styles.tableCol} hide-mobile`}>
          {/* <span className={styles.text}>Размерная таблица</span> */}
        </div>

        <div className={`${styles.buyCol} hide-mobile`}>
          <span
            onClick={() => setIsOrderModalOpen(true)}
            className={styles.text}
            style={{ cursor: "pointer" }}
          >
            Купить Yeezy
          </span>
        </div>
      </div>

      {isOrderModalOpen && (
        <OrderModal onClose={() => setIsOrderModalOpen(false)} />
      )}
    </header>
  );
};
