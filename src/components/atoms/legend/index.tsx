import type { Props } from "./props";
import "./style.css";

export const Legend = ({ text }: Props) => (
    <span className="legend">{text}</span>
);
