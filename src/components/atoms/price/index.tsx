import type { Props } from "./props";
import "./style.css";

export const Priceatom = ({ value }: Props) => (
    <span className="price">{value}</span>
);
