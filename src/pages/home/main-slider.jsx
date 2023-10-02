import React from 'react';
import Title from "../../components/title";
import Button from "../../components/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSliderData = [
    {
        title: "Топливный портал Татнефть",
        description: "Топливо, дизельное топливо, ГСМ.",
        buttonText: "Начать работу",
        id: 1,
    },
    {
        title: "Дизель, который защищает",
        description: "Чистое и надёжное топливо новейшего класса. \n" +
            "Снижает износ и защищает детали двигателя.",
        buttonText: "Подробнее",
        id: 2,
    },
    {
        title: "Как купить дешевле?",
        description: "Все просто. Больше заказы — больше скидка.",
        buttonText: "Подробнее",
        id: 3,
    },
];
const MainSliderItem = ({title, description, buttonText}) => {
    return (
        <div className="home_main-slider__item">
            <div className="main-slider__item-inner">
                <Title
                    title={title}
                    className={"main-slider__item-title"}
                />
                <p className="main-slider__item-description">
                    {description}
                </p>
                <Button
                    text={buttonText}
                    className={"main-slider__item-button"}
                />
            </div>
        </div>
    )
}

const MainSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
    }

    return (
        <div className="home_main-slider">
            <Slider {...settings}>
                {MainSliderData.map(slide => (
                    <MainSliderItem
                        key={slide.id}
                        title={slide.title}
                        description={slide.description}
                        buttonText={slide.buttonText}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default MainSlider;