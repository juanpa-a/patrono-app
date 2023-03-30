import type { Props } from "./props";
import style from "./style.module.css";

export const Price = ({ value }: Props) => (
  <span className={style.price}>{value}</span>
);
