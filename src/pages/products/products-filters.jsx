import React from 'react';
import Title from "../../components/title";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BpRadio from "../../components/radio-button";
import Input from "../../components/input";
import Button from "../../components/button";
import Checkbox from "@mui/material/Checkbox";
import {green} from "@mui/material/colors";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

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

const ProductsFilters = () => {
    return (
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
    );
};

export default ProductsFilters;