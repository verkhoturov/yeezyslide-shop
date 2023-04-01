import { ReactNode } from "react";
import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps {
  children?: ReactNode;
  secondary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export const Button = ({
  children,
  secondary,
  disabled,
  size,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.container} ${disabled ? styles.disabled : ""} ${
        secondary ? styles.secondary : ""
      } ${size === "small" ? styles.small : ""}`}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  disabled,
  href,
  size,
}: LinkButtonProps) => {
  return (
    <div
      className={`${styles.linkWrapper} ${disabled ? styles.disabled : ""}  ${
        size === "small" ? styles.small : ""
      }`}
    >
      <Link href={href}>{children}</Link>
    </div>
  );
};
