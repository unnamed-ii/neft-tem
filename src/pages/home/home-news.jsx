import React from 'react';
import Title from "../../components/title";
import NewsCard from "../news/news-card";

const HomeNews = () => {
    return (
        <section className="home__news">
            <Title
                className={"block-title"}
                title={"НОВОСТИ И СПЕЦПРЕДЛОЖЕНИЯ"}
            />
            <div className="home__news-list">
                <NewsCard
                    type={"wide"}
                    createdAt={"29 мая 2023"}
                    title={"Внимание. Информация об изменениях в положении о скидках"}
                />
                <NewsCard
                    createdAt={"29 мая 2023"}
                    title={"Внимание. Информация об изменениях в положении о скидках"}
                />
                <NewsCard
                    createdAt={"29 мая 2023"}
                    title={"Внимание. Информация об изменениях в положении о скидках"}
                />
            </div>
        </section>
    );
};

export default HomeNews;