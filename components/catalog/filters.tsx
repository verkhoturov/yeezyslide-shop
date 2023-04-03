import { ChangeEvent } from "react";
import styles from "./filters.module.scss";

import { Model } from "../../lib/types";

interface CheckboxItem {
  name: string;
  label: string;
}

type FilterType = "models" | "sizes" | "stock";

const Filter = ({
  legend,
  checkboxList,
  selectedNames,
  selectFilter,
  type,
}: {
  legend: string;
  checkboxList: {
    name: string;
    label: string;
  }[];
  selectedNames: string[];
  selectFilter: (filter: { type: FilterType; name: string }) => void;
  type: FilterType;
}) => {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    selectFilter({ type, name });
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>

      <div className={styles.labels}>
        {checkboxList.map((checkbox, i) => (
          <label key={i} className={styles.label}>
            <input
              className={styles.input}
              type="checkbox"
              name={checkbox.name}
              checked={selectedNames.includes(checkbox.name)}
              onChange={handleChange}
            />
            <div className={styles.checkbox} />
            <span>{checkbox.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

const models: CheckboxItem[] = [
  { name: "all", label: "Все" },
  { name: Model.FOAM_RUNNER, label: "foam-runner" },
  { name: Model.ADILETTE_22, label: "adilette-22" },
  { name: Model.SLIDE, label: "slide" },
];

const sizes: CheckboxItem[] = [
  { name: "all", label: "Все" },
  { name: "36", label: "36 EU" },
  { name: "37", label: "37 EU" },
  { name: "38", label: "38 EU" },
  { name: "39", label: "39 EU" },
  { name: "40", label: "40 EU" },
  { name: "41", label: "41 EU" },
  { name: "42", label: "42 EU" },
  { name: "43", label: "43 EU" },
  { name: "44", label: "44 EU" },
  { name: "45", label: "45 EU" },
  { name: "46", label: "46 EU" },
  { name: "47", label: "47 EU" },
];

const stock: CheckboxItem[] = [
  { name: "all", label: "Все" },
  { name: "in-stock", label: "ЕСТЬ НА СКЛАДЕ" },
  { name: "not-in-stock", label: "НЕТ НА СКЛАДЕ" },
];

interface Filters {
  models: string[];
  sizes: string[];
  stock: string[];
}

interface FiltersProps {
  selectedFilters: Filters;
  selectFilter: (filter: { type: FilterType; name: string }) => void;
}

export const FiltersForm = ({
  selectedFilters,
  selectFilter,
}: FiltersProps) => {
  return (
    <form className={styles.form}>
      <Filter
        legend="Модели"
        checkboxList={models}
        selectedNames={selectedFilters.models}
        selectFilter={selectFilter}
        type={"models"}
      />

      <Filter
        legend="Размеры"
        checkboxList={sizes}
        selectedNames={selectedFilters.sizes}
        selectFilter={selectFilter}
        type={"sizes"}
      />

      <Filter
        legend="Склад"
        checkboxList={stock}
        selectedNames={selectedFilters.stock}
        selectFilter={selectFilter}
        type={"stock"}
      />
    </form>
  );
};
