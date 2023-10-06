import React from 'react';
import "./style.scss";
import Container from "../../components/container";
import {QAData} from "./constants";
import Title from "../../components/title";
import QACard from "./qa-card";

const FAQ = () => {
    return (
        <Container>
            <div className="faq">
                <Title
                    title={"ВОПРОСЫ И ОТВЕТЫ"}
                    className={"page-title"}
                />
                <div className="faq__list">
                    {QAData.map(i => (
                        <QACard
                            key={i.id}
                            question={i.question}
                            answer={i.answer}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FAQ;