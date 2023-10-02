import React from 'react';
import "./style.scss";

const Input = ({type, onChange, placeholder, className, name, ...props}) => {
    return (
        <input
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className={`input ${className}`}
            name={name}
            {...props}
        />
    );
};

export default Input;