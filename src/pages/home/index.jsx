import React, {useState} from 'react';
import "./style.scss";
import Subscription from "../../components/subscription";
import Container from "../../components/container";
import Title from "../../components/title";
import NewsCard from "../news/news-card";
import Button from "../../components/button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Input from "../../components/input";
import BpRadio from "../../components/radio-button";
import CustomDropdown from "../../components/dropdown";
import MainSlider from "./main-slider";
import ProductsSlider from "./products-slider";

const Home = () => {
    const [calculatorPrice, setCalculatorPrice] = useState("1 200 000");

    return (
        <Container>
            <div className="home">
                <MainSlider/>
                <ProductsSlider/>
                <section className="home__calculator">
                    <Title
                        title={"Рассчитайте стоимость топлива"}
                        className={"block-title"}
                    />
                    <div className="home__calculator-inner">
                        <form className="home__calculator-inner__form">
                            <FormControl className="calculator-form__radio-group">
                                <FormLabel id="demo-radio-buttons-group-label">
                                    ФОРМАТ ПРОДУКЦИИ
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="разлив"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="разлив"
                                        control={<BpRadio/>}
                                        label="На разлив"
                                        id="calculator-form__radio-btn"
                                    />
                                    <FormControlLabel
                                        value="расфасовка"
                                        control={<BpRadio/>}
                                        label="Фасованная продукция"
                                        id="calculator-form__radio-btn"
                                    />
                                </RadioGroup>
                            </FormControl>
                            <div className="calculator__select-headline">
                                ТОПЛИВО
                            </div>
                            <CustomDropdown/>
                            <div className="calculator__input-headline">
                                ОБЪЁМ
                            </div>
                            <Input
                                type={"text"}
                                placeholder={"Тонн"}
                                className={"calculator-input"}
                            />
                        </form>
                        <div className="home__calculator-inner__price">
                            <p>Стоимость продукции составит от</p>
                            <div className="calculator-price">
                                {calculatorPrice}
                                <span> ₽ </span>
                            </div>
                            <div className="price__description">
                                Ознакомьтесь с положениями о скидках на продукты для мелкого опта
                            </div>
                            <a href="#">
                                <Button
                                    text={"Скидки"}
                                    className={"home__calculator-price__discounts"}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="home__calculator-footer">
                        <Button
                            className={"home__calculator-footer__button"}
                            text={"Найти работу"}
                        />
                    </div>
                </section>
                <section className="home__news">
                    <Title
                        className={"block-title"}
                        title={"НОВОСТИ И СПЕЦПРЕДЛОЖЕНИЯ"}
                    />
                    <div className="home__news-list">
                        <NewsCard
                            type={"wide"}
                            createdAt={"29 мая 2023"}
                            title={"Внимание. Информация об изменениях в положении о скидках"}
                        />
                        <NewsCard
                            createdAt={"29 мая 2023"}
                            title={"Внимание. Информация об изменениях в положении о скидках"}
                        />
                        <NewsCard
                            createdAt={"29 мая 2023"}
                            title={"Внимание. Информация об изменениях в положении о скидках"}
                        />
                    </div>
                </section>
                <Subscription/>
            </div>
        </Container>
    );
};

export default Home;