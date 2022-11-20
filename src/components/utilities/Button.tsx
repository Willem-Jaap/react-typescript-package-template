import React from "react";

interface Props {
    label: string;
    type?: "primary" | "secondary" | "tertiary";
}

const Button = ({ label, type = "primary" }: Props) => {
    return <button className={`btn btn--${type}`}>{label}</button>;
};

export type { Props as ButtonProps };
export default Button;
