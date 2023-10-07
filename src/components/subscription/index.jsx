import React, {useState} from 'react';
import "./style.scss";
import Button from "../button";
import Input from "../input";
import Modal from "../modal";

const Subscription = () => {
    const [inputValue, setInputValue] = useState("");
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        description: "",
        isError: false
    });
    const toggleModal = () => setIsModalOpened(!isModalOpened);
    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // позже здесь будет добавлена оптравка почт пользователей в базу данных
        // try catch подготовлен заранее для асинхронных запросов
        try {
            setModalData({
                title: "Подписка завершена",
                description: "Теперь все наши новости об изменениях и спецпреложениях будут приходить прямо на вашу почту.",
                isError: false
            });
        } catch (e) {
            setModalData({
                title: "Произошла ошибка",
                description: "В данный момент вы не можете подписаться на наши новости, пожалуйста попробуйте позже.",
                isError: true,
            });
        }
        setInputValue("");
        setIsModalOpened(true);
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
            <Modal
                title={modalData.title}
                description={modalData.description}
                isModalOpened={isModalOpened}
                toggleModal={toggleModal}
                isError={modalData.isError}
            />
        </div>
    );
};

export default Subscription;