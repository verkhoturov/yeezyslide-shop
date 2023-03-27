import { ChangeEvent } from "react";
import styles from "./filters.module.scss";

interface CheckboxItem {
  name: string;
  label: string;
}

const Filter = ({
  legend,
  checkboxList,
  selectedNames,
  selectFilter,
}: {
  legend: string;
  checkboxList: {
    name: string;
    label: string;
  }[];
  selectedNames: string[];
  selectFilter: (filters: Filters) => void;
}) => {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    // const filterName = evt.target.name;
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>

      {checkboxList.map((checkbox, i) => (
        <label key={i} className={styles.label}>
          <input
            className={styles.input}
            type="checkbox"
            name={checkbox.name}
            checked={selectedNames.includes(checkbox.name)}
            onChange={(evt) => console.log(evt.target.name)}
          />
          <div className={styles.checkbox} />
          <span>{checkbox.label}</span>
        </label>
      ))}
    </fieldset>
  );
};

const models: CheckboxItem[] = [
  { name: "all-models", label: "Все" },
  { name: "foam-runner", label: "foam-runner" },
  { name: "adilette-22", label: "adilette-22" },
  { name: "slide", label: "slide" },
];

const sizes: CheckboxItem[] = [
  { name: "all-sizes", label: "Все" },
  { name: "36-eu", label: "36 EU" },
  { name: "37-eu", label: "37 EU" },
  { name: "38-eu", label: "38 EU" },
  { name: "39-eu", label: "39 EU" },
  { name: "40-eu", label: "40 EU" },
  { name: "41-eu", label: "41 EU" },
  { name: "42-eu", label: "42 EU" },
  { name: "43-eu", label: "43 EU" },
  { name: "44-eu", label: "44 EU" },
  { name: "45-eu", label: "45 EU" },
];

const stock: CheckboxItem[] = [
  { name: "all-stock", label: "Все" },
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
  selectFilter: (filters: Filters) => void;
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
      />
      <Filter
        legend="Размеры"
        checkboxList={sizes}
        selectedNames={selectedFilters.sizes}
        selectFilter={selectFilter}
      />
      <Filter
        legend="Склад"
        checkboxList={stock}
        selectedNames={selectedFilters.stock}
        selectFilter={selectFilter}
      />
    </form>
  );
};
