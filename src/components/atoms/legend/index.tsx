import type { Props } from "./props";
import style from "./style.module.css";

export const Legend = ({ text }: Props) => (
  <span className={style.legend}>{text}</span>
);
