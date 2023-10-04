import React from 'react';
import "./style.scss";
import Container from "../../components/container";
import Title from "../../components/title";

const NotFound = () => {
    return (
        <div className="not-found">
            <Container>
                <div className="not-found__inner">
                    <Title
                        title={"Not Found"}
                        className={"not-found"}
                    />
                </div>
            </Container>
        </div>
    );
};

export default NotFound;