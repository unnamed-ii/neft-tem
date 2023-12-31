import React, {useEffect, useState} from 'react';
import "./style.scss"
import Container from "../container";
import {Link, NavLink, useLocation} from "react-router-dom";
import {ReactComponent as PhoneIcon} from "../../icons/phone.svg";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const switchMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return (
      <header className="header">
        <Container>
          <div className="header__inner">
            <nav className="header__menu">
              <Link to="/" className="header__menu-logo">
                <img src="#" alt="Logo"/>
              </Link>
              <ul className={"header__menu-links " + (isMenuOpen ? "mobile-open" : "")}>
                <li>
                  <NavLink to="products">
                    Продукция
                  </NavLink>
                </li>
                <li>
                  <NavLink to="feedback">
                    Обратная связь
                  </NavLink>
                </li>
                <li>
                  <NavLink to="about">
                    О компании
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__phone">
              <a href="#" className="header__phone-link">+8 (999) 999 - 99 - 99</a>
              <a href="#" className="header__phone-button"><PhoneIcon/></a>
              <button
                  onClick={switchMenu}
                  className={"header__phone-menu__switch " + (isMenuOpen ? "mobile-open" : "")}
              >
                <span className="line line1"/>
                <span className="line line2"/>
                <span className="line line3"/>
              </button>
            </div>
          </div>
        </Container>
      </header>
  );
};

export default Header;