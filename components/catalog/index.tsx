import React from "react";
import { Section } from "../layout";
import { Card } from "../card";
import { Button } from "../base";
import { FiltersForm } from "./filters";
import styles from "./index.module.scss";

import { CatalogItem } from "../../lib/types";

type FilterType = "models" | "sizes" | "stock";

const defaultSelectedFilters = {
  models: ["all"],
  sizes: ["all"],
  stock: ["all"],
};

export const Catalog = ({ items }: { items: CatalogItem[] }) => {
  const [selectedFilters, setSelectedFilters] = React.useState(
    defaultSelectedFilters
  );

  const selectFilter = (filter: { type: FilterType; name: string }) => {
    const { type, name } = filter;

    const updatedFilters = { ...selectedFilters };

    if (name === "all") {
      const isAllChecked = updatedFilters[type].includes("all");
      if (!isAllChecked) {
        updatedFilters[type] = ["all"];
      }
    } else {
      const isNameChecked = updatedFilters[type].includes(name);
      if (isNameChecked) {
        updatedFilters[type] = updatedFilters[type].filter(
          (item) => item !== name
        );
        if (!updatedFilters[type].length) {
          updatedFilters[type] = ["all"];
        }
      } else {
        updatedFilters[type] = updatedFilters[type].filter(
          (item) => item !== "all"
        );
        updatedFilters[type].push(name);
      }
    }

    setSelectedFilters(updatedFilters);
  };

  const filteredItems = React.useMemo(() => {
    let list = [...items];
    const { models, sizes, stock } = selectedFilters;

    if (models[0] !== "all") {
      list = list.filter((item) => models.includes(item.model));
    }

    if (sizes[0] !== "all") {
    }

    if (!stock.includes("not-in-stock") || !stock.includes("in-stock")) {
      if (stock.includes("not-in-stock")) {
        list = list.filter((item) => !item.inStock);
      }
      if (stock.includes("in-stock")) {
        list = list.filter((item) => item.inStock);
      }
    }
    return list;
  }, [selectedFilters, items]);

  return (
    <Section isBgColor>
      <h2 className="visually-hidden">Каталог</h2>

      <div className={styles.container}>
        <div className={styles.filterWrapper}>
          <FiltersForm
            selectedFilters={selectedFilters}
            selectFilter={selectFilter}
          />
        </div>

        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <Card item={item} />
              </li>
            ))}
          </ul>

          <div className={styles.btnWrapper} style={{ display: "none" }}>
            <Button secondary>Показать еще</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
