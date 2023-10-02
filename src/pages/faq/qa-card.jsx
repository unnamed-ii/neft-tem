import React, {useState} from "react";
import Title from "../../components/title";
import {ReactComponent as ArrowIcon} from "../../icons/arrow-down.svg";

const QACard = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => setIsActive(!isActive);

    return (
        <div className={"qa__card " + (isActive ? "active" : "")}
             onClick={toggleActive}
        >
            <div className="qa__card-question">
                <Title
                    title={question}
                    className={"qa-card"}
                />
                <ArrowIcon className="icon"/>
            </div>
            <div className="qa__card-answer">
                {answer}
            </div>
        </div>
    )
}

export default QACard;