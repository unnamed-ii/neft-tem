import React from 'react';
import "./style.scss";
import Search from "../../components/search";
import Subscription from "../../components/subscription";
import Container from "../../components/container";
import NewsCard from "./news-card";
import {NewsData} from "./constants";

const News = () => {
    return (
        <Container>
            <div className="news">
                <Search title={"Новости и спецпредложения"}/>
                <div className="news__list">
                    {NewsData.map(i => (
                        <NewsCard
                            // type={i.type}
                            createdAt={i.createdAt}
                            title={i.title}
                        />
                    ))}
                </div>
                <Subscription/>
            </div>
        </Container>
    );
};

export default News;