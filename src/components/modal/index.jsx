import React, {useEffect} from 'react';
import "./style.scss";
import Button from "../button";
import Title from "../title";

const Modal = ({title, description, toggleModal, isModalOpened, isError}) => {
    console.log('modal')
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isModalOpened && !e.target.closest(".modal")) {
                toggleModal();
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [isModalOpened, toggleModal]);

    return (
        <div className={"modal-wrapper " + (isModalOpened ? "active" : "")}>
            <div className="modal">
                <Title
                    title={title}
                    className={"modal__title " + (isError ? "error" : "")}
                />
                <div className="modal__description">
                    {description}
                </div>
                <Button
                    text={"X"}
                    onClick={toggleModal}
                    className={"modal__close"}
                />
            </div>
        </div>
    );
};

export default Modal;