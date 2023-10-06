import React, {useState} from 'react';
import "./style.scss";
import Button from "../button";
import Input from "../input";

const Subscription = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Новости и спецпредложения нашей компании будут приходить на ${inputValue}`);
        setInputValue("");
        // позже здесь будет добавлена оптравка почт пользователей в базу данных
    }

    return (
        <div className="subscription">
            <div className="subscription__inner">
                <h2 className="subscription__title">
                    Будьте в курсе всех специальных предложений
                </h2>
                <div className="subscription__form">
                    <form onSubmit={handleFormSubmit}>
                        <Input
                            type={"email"}
                            placeholder={"Email"}
                            className={"subscription__form-input"}
                            onChange={handleInputChange}
                            value={inputValue}
                        />
                        <Button
                            className={"subscription__form-button"}
                            text={"Подписаться"}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscription;