import type { Props } from "./props";
import style from "./style.module.css";

export const Button = ({ text, type = "primary", handleClick }: Props) => (
  <button
    className={`${style.button || ""} ${style[`button-${type}`] || ""}`}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    onClick={() => handleClick()}
  >
    {text}
  </button>
);
