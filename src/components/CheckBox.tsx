import { ButtonHTMLAttributes, useRef } from "react";
import styles from "./CheckBox.module.scss";
import { CheckCircle, Circle } from "@phosphor-icons/react";
import { listItem } from "../App";
import { TrashButton } from "./TrashButton";

interface ICheckbox extends ButtonHTMLAttributes<HTMLButtonElement> {
  CheckboxItem: listItem;
}

export function CheckBox({ CheckboxItem, ...props }: ICheckbox) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (ref.current != null) {
      ref.current.click();
    }
  };

  return (
    <div className={styles.checkboxContainer} onClick={handleClick}>
      <button
        ref={ref}
        className={CheckboxItem.value ? styles.selected : styles.notSelected}
        {...props}
      >
        {CheckboxItem.value ? <div className={styles.floatBackground} /> : ""}
        <div className={styles.iconField}>
          {CheckboxItem.value ? (
            <CheckCircle size={24} weight="fill" />
          ) : (
            <Circle size={24} />
          )}
        </div>
      </button>
      <span
        className={
          CheckboxItem.value ? styles.selectedText : styles.notSelectedText
        }
      >
        {CheckboxItem.label}
      </span>
      <TrashButton />
    </div>
  );
}
