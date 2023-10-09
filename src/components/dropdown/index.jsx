import React, {useEffect, useState} from "react";
import "./style.scss";
import {ReactComponent as ArrowIcon} from "../../icons/arrow-down.svg";
import {companyShippingProducts, selfShippingProducts} from "../../pages/home/constants";

const CustomDropdown = ({shipmentFormat, setProductPrice, productVolume}) => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState({label: false, price: "0"});
    const [optionsList, setOptionsList] = useState(companyShippingProducts);
    const handleToggleDropdown = () => setDropdownActive(!dropdownActive);
    const handleSelect = (option) => {
        setSelectedOption(option);
        setDropdownActive(!dropdownActive);
    }
    useEffect(() => {
        if (shipmentFormat === "доставка") {
            setOptionsList(selfShippingProducts);
        } else {
            setOptionsList(companyShippingProducts);
        }
        setProductPrice("0");
        setSelectedOption({label: false, price: "0"});
        setDropdownActive(false);
    }, [shipmentFormat]);

    useEffect(() => {
        const updatedPrice = (selectedOption.price * productVolume).toString();
        setProductPrice(updatedPrice)
    }, [productVolume, selectedOption]);

    return (
        <div className="dropdown">
            <div onClick={handleToggleDropdown} className={"dropdown__input " + (dropdownActive ? "active" : "")}>
                {!!selectedOption.label
                    ?
                    <div className="dropdown__input-selected">
                        {selectedOption.label}
                    </div>
                    :
                    "Выберите вид топлива"
                }
                <ArrowIcon className={"icon " + (dropdownActive ? "rotated" : "")}/>
            </div>
            <div className="dropdown__list" style={{display: dropdownActive ? "block" : "none"}}>
                {optionsList.map((option, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleSelect(option)}
                        className="dropdown__list-item"
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomDropdown;