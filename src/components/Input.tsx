import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface ListDataProps extends InputHTMLAttributes<HTMLInputElement> {
  isFilled?: boolean;
}

export function Input({ isFilled = false, ...props }: ListDataProps) {
  return (
    <input
      id="list-data"
      {...props}
      className={isFilled ? styles.hasData : ""}
    ></input>
  );
}
