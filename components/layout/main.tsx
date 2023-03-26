import { ReactNode } from "react";
import styles from "./main.module.scss";

interface MainProps {
  children?: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};
