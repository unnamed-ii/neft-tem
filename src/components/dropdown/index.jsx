import React, {useEffect, useState} from "react";
import "./style.scss";
import {ReactComponent as ArrowIcon} from "../../icons/arrow-down.svg";

const CustomDropdown = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        {
            label: "Автомобильный бензин АИ-92-К5 экологического класса К5 марки TANECO-92 'EURO-6' по СТО 78689379-50-2020",
            value: "option1",
            price: "59000"
        },
        {
            label: "Автомобильный бензин АИ-95-К5 экологического класса К5 марки TANECO-95 'EURO-6' по СТО 78689379-50-2020",
            value: "option2",
            price: "61000"
        },
        {
            label: "Автомобильный бензин АИ-98-К5 (Автомобильный бензин экологического класса К5 марки АИ-98-К5 по ГОСТ 32513-2013)",
            value: "option3",
            price: "82000"
        },
    ];
    const handleToggleDropdown = () => setDropdownActive(!dropdownActive);
    const handleSelect = (option) => {
        setSelectedOption(option);
        setDropdownActive(!dropdownActive);
    }
    useEffect(() => {
        if (selectedOption) {
            console.log(123)
        }
    }, [selectedOption]);
    return (
        <div className="dropdown">
            <div onClick={handleToggleDropdown} className={"dropdown__input " + (dropdownActive ? "active" : "")}>
                {!!selectedOption
                    ?
                    <div className="dropdown__input-selected">
                        {selectedOption}
                    </div>
                    :
                    "Выберите вид топлива"
                }
                <ArrowIcon className={"icon " + (dropdownActive ? "rotated" : "")}/>
            </div>
            <div className="dropdown__list" style={{display: dropdownActive ? "block" : "none"}}>
                {options.map(option => (
                    <div
                        onClick={() => handleSelect(option.label)}
                        key={option.label}
                        className="dropdown__list-item"
                        data-price={option.price}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomDropdown;