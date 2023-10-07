import React from "react";
import "./style.scss";
import Container from "../../components/container";

const SeparateProduct = ({
                             title = "Внимание. Информация об изменениях в договоре оферты",
                             description = ["Автомобильный бензин АИ-92-К5 экологического класса К5 марки TANECO-92 \"EURO-6\" по СТО 78689379-50-2020"],
                             manufacturer = {
                                 name: "АО «ТАНЕКО»",
                                 address: "423570, Российская Федерация, Республика Татарстан, г.Нижнекамск, а/я-97 РУПС"
                             },
                            shipmentMethods = [
                                "with cars",
                                "with trains",
                                "with pipeline"
                            ],
                             id
                         }) => {
    return (
        <Container>
            <div className="separate-product">

            </div>
        </Container>
    );
};

export default SeparateProduct;