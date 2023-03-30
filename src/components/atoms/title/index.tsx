import type { Props } from "./props";
import style from "./style.module.css";

export const Title = ({ text }: Props) => <h1 className={style.title}>{text}</h1>;
