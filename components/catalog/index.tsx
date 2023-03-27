import React from "react";
import { Section } from "../layout";
import { Card } from "../card";
import { Button } from "../base";
import { FiltersForm } from "./filters";
import styles from "./index.module.scss";

import { CatalogItem } from "../../lib/types";

const defaultSelectedFilters = {
  models: ["all-models"],
  sizes: ["all-sizes"],
  stock: ["all-stock"],
}

interface Filters { models: string[]; sizes: string[]; stock: string[] }

export const Catalog = ({ items }: { items: CatalogItem[] }) => {

  const [selectedFilters, setSelectedFilters] = React.useState(defaultSelectedFilters);

  const selectFilter = (filters: Filters) => {
    setSelectedFilters(filters)
  }

  return (
    <Section isBgColor>
      <h2 className="visually-hidden">Каталог</h2>

      <div className={styles.container}>
        <div className={styles.filterWrapper}>
          <FiltersForm selectedFilters={selectedFilters} selectFilter={selectFilter} 
          />
        </div>

        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id}>
                <Card item={item} />
              </li>
            ))}
          </ul>

          <div className={styles.btnWrapper}>
            <Button secondary>Показать еще</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
