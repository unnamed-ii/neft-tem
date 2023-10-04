import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as ArrowIcon} from "../../icons/arrow-down.svg";
import {ReactComponent as ArrowRightIcon} from "../../icons/arrow-right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsData = [
    {
        name: "Эфир метил-трет-бутиловый",
        price: "120 000",
        id: "1",
    },
    {
        name: "Масло",
        price: "125 000",
        id: "2",
    },
    {
        name: "Газ сжижженный топливный",
        price: "39 000",
        id: "3",
    },
    {
        name: "Топливо для реактивных двигателей",
        price: "76 000",
        id: "4",
    },
    {
        name: "Топливо дизельное",
        price: "67 900",
        id: "5",
    },
    {
        name: "Бензин АИ-92",
        price: "61 000",
        id: "6",
    },
]

const ProductCard = ({theme, name, price}) => {
    return (
        <div className={"products-slider__card " + theme}>
            <div className="products-slider__card-name">
                {name}
            </div>
            <div className="products-slider__card-bottom">
                <div className="slider__card-bottom__price">
                    <span>от</span> {price} <i>₽</i>
                    <ArrowRightIcon/>
                </div>
            </div>
        </div>
    )
}

const ProductsSlider = () => {
    const sliderRef = useRef(null);
    const nextSlide = () => sliderRef.current.slickNext();
    const prevSlide = () => sliderRef.current.slickPrev();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="home__products-slider">
            <Slider ref={sliderRef} {...settings}>
                {ProductsData.map((product, idx) => (
                    <ProductCard
                        key={product.id}
                        theme={idx % 2 === 0 ? "dark" : "green"}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </Slider>
            <div className="home__products-slider__number">
                всего видов нефтепродуктов
                <b>16</b>
            </div>
            <div className="home__products-slider__controller">
                <div className="slider-controller__inner">
                    <button onClick={prevSlide} className="slider-controller__inner-prev">
                        <ArrowIcon className="arrow-icon"/>
                    </button>
                    <div className="slider-controller__inner-link">
                        <Link to="/products">
                            Смотреть всё
                        </Link>
                    </div>
                    <button onClick={nextSlide} className="slider-controller__inner-next">
                        <ArrowIcon className="arrow-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsSlider;