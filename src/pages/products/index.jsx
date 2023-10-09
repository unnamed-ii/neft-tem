import React, {useEffect, useState} from 'react';
import "./style.scss";
import Search from "../../components/search";
import Container from "../../components/container";
import LoadingAnimation from "../../components/loading-animation";
import ProductsFilters from "./products-filters";

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
                            <ProductCard
                                title={"Бензин АИ-98"}
                                price={"81 000"}
                                types={"2"}
                            />
                            <ProductCard
                                title={"Бензин АИ-100"}
                                price={"91 000"}
                                types={"3"}
                            />
                        </div>
                    </div>
                    {/*<ProductsFilters/>*/}
                </div>
            </div>
        </Container>
    );
};

export default Products;