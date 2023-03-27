import { ReactNode } from "react";
import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps {
  children?: ReactNode;
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.container}>{children}</button>;
};

export const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <div className={styles.linkWrapper}>
      <Link href={href}>{children}</Link>
    </div>
  );
};
