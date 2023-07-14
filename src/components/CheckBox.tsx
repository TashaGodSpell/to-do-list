import { ButtonHTMLAttributes } from "react";
import styles from "./CheckBox.module.scss";
import { Circle } from "@phosphor-icons/react";
import { listItem } from "../App";

interface ICheckbox extends ButtonHTMLAttributes<HTMLButtonElement>  {
  CheckboxItem: listItem;
}



export function CheckBox({ CheckboxItem ,...props }: ICheckbox) {


  return <button {...props} >
    sdsdssd
  </button>;
}
