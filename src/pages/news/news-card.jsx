import React from "react";
import Title from "../../components/title";

const NewsCard = ({createdAt, title, type}) => {
    return (
        <div className={"news__card " + (type || "")}>
            <time className="news__card-date">
                {createdAt}
            </time>
            <a href="#" className="news__card-title">
                <Title
                    className={"news__card-title"}
                    title={title}
                />
            </a>
            <img src="#" alt="Новость" className="news__card-image"/>
        </div>
    )
}

export default NewsCard;