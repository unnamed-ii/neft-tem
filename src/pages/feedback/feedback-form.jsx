import React from 'react';
import Title from "../../components/title";
import Input from "../../components/input";
import Button from "../../components/button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export const yupSheme = yup.object({
    name: yup
        .string()
        .required("Это поле обязательно*"),
    phone: yup
        .string()
        .required("Это поле обязательно*"),
    message: yup
        .string()
        .required("Это поле обязательно*"),
});

const FeedbackForm = ({setModalData, setIsModalOpened}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(yupSheme)
    });
    const onFormSubmit = () => {
        // позже здесь будет добавлена оптравка писем в базу данных
        // try catch подготовлен заранее для асинхронных запросов
        try {
            setModalData({
                title: "Сообщение успешно отправлено",
                description: "Вы свяжемся с вами с ближайшее время",
                isError: false
            });
        } catch (e) {
            setModalData({
                title: "Произошла ошибка",
                description: "Произошла ошибка при отправке сообщения, пожалуйста попробуйте ещё раз позже",
                isError: true
            });
        }

        setIsModalOpened(true);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="feedback__form">
            <Title
                title={"СВЯЖИТЕСЬ С НАМИ"}
                className={"feedback-form__title"}
            />
            <div className="feedback__form-inputs">
                <div className="feedback__form-inputs__input">
                    <Input
                        type={"text"}
                        placeholder={"Имя"}
                        className={"feedback-form__input"}
                        name={"name"}
                        {...register("name")}
                    />
                    <p>
                        {errors.name?.message}
                    </p>
                </div>
                <div className="feedback__form-inputs__input">
                    <Input
                        type={"text"}
                        placeholder={"Телефон"}
                        className={"feedback-form__input"}
                        name={"phone"}
                        {...register("phone")}
                    />
                    <p>
                        {errors.phone?.message}
                    </p>
                </div>
            </div>
            <div className="feedback__form-textarea">
                <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={"Сообщение"}
                    {...register("message")}
                />
                <p>
                    {errors.message?.message}
                </p>
            </div>
            <Button
                text={"Отправить"}
                className={"feedback-form__button"}
            />
        </form>
    );
};

export default FeedbackForm;