import React from 'react';
import "./style.scss";
import Container from "../container";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__inner">
                    <div className="footer__logo">
                        <Link to="/">
                            <img src="#" alt="Logo" className="footer__logo-image"/>
                        </Link>
                        <div className="footer__logo-copyright">
                            © 2023
                        </div>
                    </div>
                    <nav className="footer__sitemap">
                        <ul className="footer__sitemap-column">
                            <li className="footer__sitemap-column__title">
                                Сервис
                            </li>
                            <li className="footer__sitemap-column__item">
                                <Link to="products">Продукция</Link>
                            </li>
                        </ul>
                        <ul className="footer__sitemap-column">
                            <li className="footer__sitemap-column__title">
                                Информация
                            </li>
                            <li className="footer__sitemap-column__item">
                                <Link to="cooperation">Схема сотрудничества</Link>
                            </li>
                            <li className="footer__sitemap-column__item">
                                <Link to="feedback">Обратная связь</Link>
                            </li>
                            <li className="footer__sitemap-column__item">
                                <Link to="faq">Вопросы и ответы</Link>
                            </li>
                        </ul>
                        <ul className="footer__sitemap-column">
                            <li className="footer__sitemap-column__title">
                                Компания
                            </li>
                            <li className="footer__sitemap-column__item">
                                <Link to="about">О компании</Link>
                            </li>
                            <li className="footer__sitemap-column__item">
                                <Link to="news">Новости</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__phone">
                        <a href="#" className="footer__phone-link">+8 (999) 999 - 99 - 99</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;