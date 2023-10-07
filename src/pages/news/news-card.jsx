import React from "react";
import Title from "../../components/title";
import {Link} from "react-router-dom";

const NewsCard = ({createdAt, title, type, id}) => {
    return (
        <div className={"news__card " + (type || "")}>
            <Link to={`/news/${id}`}>
                <time className="news__card-date">
                    {createdAt}
                </time>
                <Title
                    className={"news__card-title"}
                    title={title}
                />
                <img src="#" alt="Новость" className="news__card-image"/>
            </Link>
        </div>
    )
}

export default NewsCard;