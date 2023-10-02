import React from 'react';
import "./style.scss";

const Button = ({text, className, onClick, ...props}) => {
    return (
        <button className={`button ${className}`} onClick={onClick} {...props}>
            {text}
        </button>
    );
};

export default Button;