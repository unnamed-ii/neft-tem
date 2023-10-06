import React from 'react';
import "./style.scss";
import Subscription from "../../components/subscription";
import Container from "../../components/container";
import MainSlider from "./main-slider";
import ProductsSlider from "./products-slider";
import Calculator from "./calculator";
import HomeNews from "./home-news";

const Home = () => {

    return (
        <Container>
            <div className="home">
                <MainSlider/>
                <ProductsSlider/>
                <Calculator/>
                <HomeNews/>
                <Subscription/>
            </div>
        </Container>
    );
};

export default Home;