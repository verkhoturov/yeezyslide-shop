import { ReactNode } from "react";
import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps {
  children?: ReactNode;
  secondary?: boolean;
}

interface LinkButtonProps extends ButtonProps {
  href: string;
  disabled?: boolean;
}

export const Button = ({ children, secondary }: ButtonProps) => {
  return (
    <button
      className={`${styles.container} ${secondary ? styles.secondary : ""}`}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({ children, disabled, href }: LinkButtonProps) => {
  return (
    <div className={`${styles.linkWrapper} ${disabled ? styles.disabled : ""}`}>
      <Link href={href}>{children}</Link>
    </div>
  );
};
