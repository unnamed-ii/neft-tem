import React from 'react';
import "./style.scss";
import Title from "../title";
import Button from "../button";
import Input from "../input";

const Search = ({title}) => {
    const onSearchSubmit = () => console.log("searching...")

    return (
        <div className="search">
            <Title
                title={title}
                className={"page-title"}
            />
            <form onSubmit={onSearchSubmit} className="search__form">
                <Input
                    type={"text"}
                    className={"search-input"}
                    placeholder={"Поиск по названию"}
                />
                <Button
                    text={"Найти"}
                    className={"search-button"}
                />
            </form>
        </div>
    );
};

export default Search;