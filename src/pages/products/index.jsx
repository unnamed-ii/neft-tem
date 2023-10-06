import React, {useEffect, useState} from 'react';
import "./style.scss";
import Search from "../../components/search";
import Container from "../../components/container";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import BpRadio from "../../components/radio-button";
import Title from "../../components/title";
import Input from "../../components/input";
import Button from "../../components/button";
import Checkbox from "@mui/material/Checkbox";
import {green} from "@mui/material/colors";
import LoadingAnimation from "../../components/loading-animation";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const ProductCard = ({title, price, types}) => {
    return (
        <a href="#" className="main__list-product">
            <div className="main__list-product__name">
                {title}
            </div>
            <div className="main__list-product__info">
                <div className="product__info-price">
                    <span>от</span> {price} ₽
                </div>
                <div className="product__info-description">
                    <span>{types}</span> вида нефтепродукта
                </div>
            </div>
        </a>
    )
}

const CustomCheckBox = () => {
    return (
        <Checkbox
            {...label}
            sx={{
                color: "default",
                '&.Mui-checked': {
                    color: green["A400"],
                },
            }}
            style={{padding: "0 9px 0 0"}}
        />
    )
}

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        // here will be request to database for products
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1000)
    },[])
    return (
        <Container>
            <LoadingAnimation isLoading={isLoading}/>
            <div className="products">
                <Search title={"ПРОДУКЦИЯ"}/>
                <div className="products__inner">
                    <div className="products__inner-main">
                        <div className="products__inner-main__list">
                            <ProductCard
                                title={"Бензин АИ-92"}
                                price={"59 000"}
                                types={"2"}
                            />
                            <ProductCard
                                title={"Бензин АИ-95"}
                                price={"71 000"}
                                types={"3"}
                            />
                        </div>
                        {/*<div className="products__inner-main__pagination">*/}
                        {/*    <button className="pagination__prev">*/}
                        {/*        prev*/}
                        {/*    </button>*/}
                        {/*    <div className="pagination__pages">*/}

                        {/*    </div>*/}
                        {/*    <button className="pagination__next">*/}
                        {/*        next*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                    <div className="products__inner-filters">
                        <form className="products__inner-filters__group">
                            <div className="filters__group-payment">
                                <Title
                                    title={"СПОСОБ ПОКУПКИ"}
                                    className={"filter-title"}
                                    style={{marginTop: "0"}}
                                />
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="all"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="all"
                                        control={<BpRadio/>}
                                        label="Неважно"
                                        id="calculator-form__radio-btn"
                                    />
                                    <FormControlLabel
                                        value="online"
                                        control={<BpRadio/>}
                                        label="Онлайн-покупка"
                                        id="calculator-form__radio-btn"
                                    />
                                </RadioGroup>
                            </div>
                            <div className="filters__group-format">
                                <Title
                                    title={"ФОРМАТ ПРОДУКЦИИ"}
                                    className={"filter-title"}
                                />
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
                            </div>
                            <div className="filters__group-shipment">
                                <Title
                                    title={"СПОСОБЫ ОТГРУЗКИ"}
                                    className={"filter-title"}
                                />
                                <div className="filters__group-shipment__row">
                                    <CustomCheckBox/>
                                    Автомобиль
                                </div>
                                <div className="filters__group-shipment__row">
                                    <CustomCheckBox/>
                                    Ж/Д
                                </div>
                                <div className="filters__group-shipment__row">
                                    <CustomCheckBox/>
                                    Трубопровод
                                </div>
                            </div>
                            <div className="filters__group-price">
                                <Title
                                    title={"ЦЕНА ЗА ТОННУ (₽)"}
                                    className={"filter-title"}
                                />
                                <div className="filters__group-price__range">
                                    <Input
                                        type={"number"}
                                        placeholder={"от"}
                                    />
                                    -
                                    <Input
                                        type={"number"}
                                        placeholder={"до"}
                                    />
                                </div>
                            </div>
                            <div className="filters__group-shipment-bases">
                                <Title
                                    title={"БАЗИСЫ ОТГРУЗКИ"}
                                    className={"filter-title"}
                                />
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    АО "ТАНЕКО"
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    Бавлиновская нефтебаза ООО "Татнефть-АЗС Центр"
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    Гороховецкая нефтебаза ООО "Татнефть-АЗС Центр"
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    ЕНПЗ Управление "ТНГП"
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    Казанское ОП (Склад масел) ООО "Транзит-Ойл"
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    Конарский раздаточный блок (узел) ООО "Татнефть-АЗС Центр"
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    ООО "Татнефтьавиасервис"
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    ООО "Тольятикаучук
                                </div>
                                <div className="shipment-bases__row">
                                    <CustomCheckBox/>
                                    Упрвление "Татнефтегазпереработка"
                                </div>
                            </div>
                        </form>
                        <Button
                            text={"Сбросить"}
                            className={"products__inner-filters__button"}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Products;