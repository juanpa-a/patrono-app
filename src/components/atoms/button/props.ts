export type Props = {
    text: string;
    type?:
        | "primary"
        | "secondary"
        | "outlined"
        | "apple"
        | "google"
        | "facebook";
    handleClick: () => void;
};
