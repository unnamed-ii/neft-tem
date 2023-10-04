import React from 'react';
import "./style.scss";
import Button from "../button";
import Input from "../input";

const Subscription = () => {
    return (
        <div className="subscription">
            <div className="subscription__inner">
                <h2 className="subscription__title">
                    Будьте в курсе всех специальных предложений
                </h2>
                <div className="subscription__form">
                    <form>
                        <Input
                            type={"email"}
                            placeholder={"Email"}
                            className={"subscription__form-input"}
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