import React from "react";
import "./style.scss";
import Container from "../../components/container";
import {Link} from "react-router-dom";
import Title from "../../components/title";
import {ReactComponent as ArrowIcon} from "../../icons/arrow-down.svg";

const SeparateNews = ({
                          title = "Внимание. Информация об изменениях в договоре оферты",
                          createdAt = "22 мая 2023",
                          text = ["Просим Вас ознакомиться с обновленным договором оферты (изменения внесены в пункты 1.15, 11.6-11.8). Документ размещен в разделе «Схема работы», шаг «2.Заключение договора» и вступает в действие с 22 мая 2023 года."],
                          id
                      }) => {
    return (
        <Container>
            <div className="single-news">
                <div className="single-news__link">
                    <Link to={"/news"}>
                        <ArrowIcon className="icon"/>
                        Новости и спецпредложения
                    </Link>
                </div>
                <div className="single-news__content">
                    <Title
                        title={title}
                        className={"single-news__content-title"}
                    />
                    <div className="single-news__content-createdAt">
                        {createdAt}
                    </div>
                    <div className="single-news__content-text">
                        <p>Уважаемые клиенты!</p>
                        {text.map((paragraph, idx) => (
                            <p key={idx}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SeparateNews;