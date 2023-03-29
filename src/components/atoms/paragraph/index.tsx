import type { Props } from "./props";
import "./style.css";

export const Paragraph = ({ body }: Props) => (
    <p className="paragraph">{body}</p>
);
