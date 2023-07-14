import { ButtonHTMLAttributes } from "react";
import styles from "./Submit.module.scss";
import { PlusCircle } from "@phosphor-icons/react";

export function Submit(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.submitButton}>
      Criar <PlusCircle size={16} />
    </button>
  );
}
