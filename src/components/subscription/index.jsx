import React from 'react';
import "./style.scss";
import Button from "../button";

const Subscription = () => {
    return (
        <div className="subscription">
            <div className="subscription__inner">
                <h2 className="subscription__title">
                    Будьте в курсе всех специальных предложений
                </h2>
                <div className="subscription-form">
                    <form>
                        <input type="email"
                               placeholder="Email"
                               className="subscription-form__input"
                        />
                        <Button
                            className={"subscription__form__button"}
                            text={"Подписаться"}
                        >
                            Подписаться
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscription;