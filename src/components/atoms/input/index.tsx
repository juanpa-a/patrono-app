import type { Props } from "./props";
import "./style.css";

export const TextField = ({ label, placeholder }: Props) => {
    return (
        <div className={"text-field-container"}>
            <span className="text-field-label">{label}</span>
            <input
                type="text"
                placeholder={placeholder}
                className="text-field"
            />
        </div>
    );
};
