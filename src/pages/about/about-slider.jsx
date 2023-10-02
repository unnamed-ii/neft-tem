import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSliderData = [
    {
        title: "slide 1",
        id: 1,
    },
    {
        title: "slide 2",
        id: 2,
    },
    {
        title: "slide 3",
        id: 3,
    },

];

const AboutSliderItem = ({title}) => {
    return (
        <div className="about__slider-item">
            {title}
        </div>
    )
}

const AboutSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        autoplay: true,
    }

    return (
        <div className="about__slider">
            <Slider {...settings}>
                {AboutSliderData.map(slide => (
                    <AboutSliderItem
                        key={slide.id}
                        title={slide.title}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default AboutSlider;