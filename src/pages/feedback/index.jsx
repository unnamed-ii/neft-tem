import React, {useState} from 'react';
import "./style.scss";
import Container from "../../components/container";
import Title from "../../components/title";
import Modal from "../../components/modal";
import FeedbackForm from "./feedback-form";

const Feedback = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        description: "",
        isError: false
    });
    const toggleModal = () => setIsModalOpened(!isModalOpened);

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
                <FeedbackForm
                    setModalData={setModalData}
                    setIsModalOpened={setIsModalOpened}
                />
                <Modal
                    title={modalData.title}
                    description={modalData.description}
                    isModalOpened={isModalOpened}
                    toggleModal={toggleModal}
                    isError={modalData.isError}
                />
            </div>
        </Container>
    );
};

export default Feedback;