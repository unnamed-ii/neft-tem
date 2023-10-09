import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Title from "../../components/title";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BpRadio from "../../components/radio-button";
import CustomDropdown from "../../components/dropdown";
import Input from "../../components/input";
import Button from "../../components/button";

const Calculator = () => {
    const [productPrice, setProductPrice] = useState("0");
    const [shipmentFormat, setShipmentFormat] = useState("самовывоз");
    const [productVolume, setProductVolume] = useState("10");
    const handleProductVolumeChange = (volume) => setProductVolume(volume);
    const handleShipmentFormatChange = (format) => setShipmentFormat(format);
    const handleFormSubmit = (e) => e.preventDefault();

    return (
        <section className="home__calculator">
            <Title
                title={"Рассчитайте стоимость топлива"}
                className={"block-title"}
            />
            <div className="home__calculator-inner">
                <form onSubmit={handleFormSubmit} className="home__calculator-inner__form">
                    <FormControl className="calculator-form__radio-group">
                        <FormLabel id="demo-radio-buttons-group-label">
                            СПОСОБ ОТГРУЗКИ
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="самовывоз"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="самовывоз"
                                control={<BpRadio/>}
                                label="Самовывоз"
                                id="calculator-form__radio-btn"
                                onChange={(e) => handleShipmentFormatChange(e.target.value)}
                            />
                            <FormControlLabel
                                value="доставка"
                                control={<BpRadio/>}
                                label="Доставка"
                                id="calculator-form__radio-btn"
                                onChange={(e) => handleShipmentFormatChange(e.target.value)}
                            />
                        </RadioGroup>
                    </FormControl>
                    <div className="calculator__select-headline">
                        НЕФТЕПРОДУКТЫ
                    </div>
                    <CustomDropdown
                        shipmentFormat={shipmentFormat}
                        setProductPrice={setProductPrice}
                        productVolume={productVolume}
                    />
                    <div className="calculator__input-headline">
                        ОБЪЁМ
                    </div>
                    <Input
                        type={"number"}
                        placeholder={"Тонн"}
                        className={"calculator-input"}
                        value={productVolume}
                        onChange={(e) => handleProductVolumeChange(e.target.value)}
                    />
                </form>
                <div className="home__calculator-inner__price">
                    <p>Стоимость продукции составит от</p>
                    <div className="calculator-price">
                        {productPrice}
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
    );
};

export default Calculator;