import type { Props } from "./props";
import style from "./style.module.css";

export const Paragraph = ({ body }: Props) => (
  <p className={style.paragraph}>{body}</p>
);
