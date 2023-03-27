import { Section } from "../layout";
import { Card } from "../card";
// import { Button } from "../base";
import Image, { StaticImageData } from "next/image";
import styles from "./index.module.scss";

import { mockItems} from "./mock-items";

export const Catalog = () => {
  return (
    <Section isBgColor>
      <h2 className="visually-hidden">каталог</h2>
      <div className={styles.container}>
        <div className={styles.filterWrapper}></div>

        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {mockItems.map((item) => <li key={item.id}>
              <Card item={item} />
            </li>)} 
          </ul>
        </div>
      </div>
    </Section>
  );
};
