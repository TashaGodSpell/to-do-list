import { Trash } from "@phosphor-icons/react";
import { ButtonHTMLAttributes } from "react";
import styles from './TrashButton.module.scss';

export function TrashButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.trashButton}>
      <Trash size={24} />
    </button>
  );
}
