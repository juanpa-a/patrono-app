import type { Props } from "./props";
import "./style.css";

export const Directory = ({ title, users }: Props) => {
    return (
        <div className={`directory-container`}>
            <h5 className="directory-title">{title}</h5>
            <ul>
                {users.map(({ name, id }) => (
                    <li className="directory-user">{name}</li>
                ))}
            </ul>
        </div>
    );
};
