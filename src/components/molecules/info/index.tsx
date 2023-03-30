import type { Props } from "./props";
import "./style.css";
import { Button } from "@atoms/button/index";

export const Info = ({ title, description, action, handleClick }: Props) => {
    return (
        <div className="info-container">
            <h3 className="info-title">{title}</h3>
            <h4 className="info-description">{description}</h4>
            <Button text={action} handleClick={handleClick} />
        </div>
    );
};
