import type { Props } from "./props";
import style from "./style.module.css";

export const TextField = ({ label, placeholder }: Props) => {
    return (
        <div className={style.textFieldContainer}>
            <span className={style.textFieldLabel}>{label}</span>
            <input
                type="text"
                placeholder={placeholder}
                className={style.textField}
            />
        </div>
    );
};
