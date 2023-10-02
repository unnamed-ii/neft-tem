import React from 'react';
import "./style.scss";

const Title = ({title, className, ...props}) => {
    return (
        <div className={`title ${className}`}  {...props}>
            {title}
        </div>
    );
};

export default Title;