import Link from "next/link";
import styles from "./index.module.scss";
import { VkIcon, TgIcon, InstIcon } from "./soc-icons";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.row}>
        <div className={styles.info}>
          <Link href={"/"} className={styles.logo}>
            yeezyslide_russia
          </Link>
          <p className={styles.desc}>
            yeezyslide_russia мы, специализирующуюся на продаже тапочек Yeeze в
            Москве! Наша компания является самым успешным дистербьютером Yeeze в
            России, мы гарантируем нашим клиентам высокое качество продукции и
            быструю доставку.
          </p>
        </div>

        <div className={styles.socWrapper}>
          <div className={styles.soc}>
            <Link href={"https://vk.com/club216236325"} target="_blank">
              <VkIcon />
            </Link>
            <Link href={"https://t.me/yeezy_slide"} target="_blank">
              <TgIcon />
            </Link>
            <Link
              href={
                "https://instagram.com/yeezyslide_russia?igshid=MmIzYWVlNDQ5Yg==/"
              }
              target="_blank"
            >
              <InstIcon />
            </Link>
          </div>
          <p className={styles.desc}>
            Подписывайтесь на наши социальные сети, следите за акциями и
            скидками
          </p>
        </div>
      </div>
    </footer>
  );
};
