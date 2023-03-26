import { ReactNode } from "react";
import styles from "./section.module.scss";

interface SectionProps {
  children?: ReactNode;
  isBgColor?: boolean;
}

export const Section = ({ children, isBgColor }: SectionProps) => {
  if(isBgColor) {
    return <section className={styles.bgColorWrapper}>
      <div className={styles.container}>{children}</div></section>;
  }
  return <section className={styles.container}>{children}</section>;
};
