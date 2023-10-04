import React, {useState} from 'react';
import "./style.scss";
import Container from "../../components/container";
import Title from "../../components/title";
import Button from "../../components/button";
import Input from "../../components/input";

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        text: ""
    });
    const onFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <Container>
            <div className="feedback">
                <div className="feedback__contacts">
                    <div className="feedback__contacts-row">
                        <Title
                            title={"НАШ АДРЕС"}
                            className={"feedback-info__row"}
                        />
                        423450, Российская Федерация,
                        Республика Татарстан,
                        г. Альметьевск, ул. Ленина, 75.
                    </div>
                    <div className="feedback__contacts-row">
                        <Title
                            title={"НАШ ТЕЛЕФОН"}
                            className={"feedback-info__row"}
                        />
                        <a href="#">+89999999999</a>
                    </div>
                    <div className="feedback__contacts-row">
                        <Title
                            title={"НАША ПОЧТА"}
                            className={"feedback-info__row"}
                        />
                        <a href="mailto:isaingashev@gmail.com">example@mail.ru</a>
                    </div>
                </div>
                <form onSubmit={onFormSubmit} className="feedback__form">
                    <Title
                        title={"СВЯЖИТЕСЬ С НАМИ"}
                        className={"feedback-form__title"}
                    />
                    <div className="feedback__form-inputs">
                        <Input
                            type={"text"}
                            placeholder={"Имя"}
                            className={"feedback-form__input"}
                            name={"name"}
                            value={formData.name}
                            onChange={onFieldChange}
                        />
                        <Input
                            type={"text"}
                            placeholder={"Телефон"}
                            className={"feedback-form__input"}
                            name={"phone"}
                            value={formData.phone}
                            onChange={onFieldChange}
                        />
                    </div>
                    <textarea
                        name="text"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder={"Сообщение"}
                        value={formData.text}
                        onChange={onFieldChange}
                    />
                    <Button
                        text={"Отправить"}
                        className={"feedback-form__button"}
                    />
                </form>
            </div>
        </Container>
    );
};

export default Feedback;