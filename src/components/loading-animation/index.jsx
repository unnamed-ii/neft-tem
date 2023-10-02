import React, {useEffect} from "react";
import "./style.scss";

const LoadingAnimation = ({isLoading}) => {
    useEffect(() => {
        // preventing scroll
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isLoading])

    return (
        <div className={"loading" + (isLoading ? " active" : "")}>
            <div className="loading__circle"/>
        </div>
    );
};

export default LoadingAnimation;