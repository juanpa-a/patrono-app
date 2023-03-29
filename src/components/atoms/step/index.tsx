import type { Props } from "./props";
import "./style.css";

export const Step = ({ step }: Props) => (
    <span className="stepatom-text">{step}</span>
);
