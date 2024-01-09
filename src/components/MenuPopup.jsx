import React from "react";
import headerLogo from "../images/logo.svg";
import menu from "../images/menu.svg";
import menuClose from "../images/menuClose.svg";
import telephone from "../images/telephone.svg";
import hatImg from "../images/hatImage.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function MenuPopup({ isOpen, closeAllPopups }) {
  return (
    <div className={isOpen ? "popup__menu popup_opened" : "popup__menu"}>
      <div className="popupMenu">
        <div className="header_black">
          <p className="hader_black__text">Саратов, ул. Окольная 3-я, 17/3</p>
        </div>
        <div className="header_white">
          <img className="header_white__img" src={headerLogo}></img>
          <button
            className="header_white__button"
            id="close-popup-menu"
            onClick={closeAllPopups}
          >
            <img className="header_white__button__img" src={menuClose}></img>
            <p className="header_white_text">Закрыть</p>
          </button>
          <div className="header_white__telephone">
            <p className="header_white_text">+7 (903) 045-68-12</p>
            <img className="header_white__telephone__img" src={telephone}></img>
          </div>
        </div>
        <div className="popupMenu__flex">
          <nav id="navbarMenu">
            <ul className="popupMenu__ul">
              <li className="popupMenu__ul__text">
                <Link
                  activeClass="active"
                  to="Header"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeAllPopups}
                >
                  Главная
                </Link>
              </li>
              <li className="popupMenu__ul__text">
                <Link
                  activeClass="active"
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeAllPopups}
                >
                  О нас
                </Link>
              </li>
              <li className="popupMenu__ul__text">
                <Link
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeAllPopups}
                >
                  Услуги
                </Link>
              </li>
              <li className="popupMenu__ul__text">
                <Link
                  activeClass="active"
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeAllPopups}
                >
                  Портфолио
                </Link>
              </li>
            </ul>
          </nav>
          <div className="popupMenu__inputs">
            <p className="popupMenu__inputs__text">Хотите обсудить проект?</p>
            <p className="popupMenu__inputs__text_min">
              Оставьте свои данные и мы вам перезвоним
            </p>
            <div className="popup__input__container">
              <input
                name="avatar"
                id="name-input"
                type="text"
                className="popup__input"
                placeholder="Ваше имя"
                minLength="2"
                required
              />
              <input
                name="avatar"
                id="telephone-input"
                type="tel"
                className="popup__input"
                placeholder="Номер телефона"
                minLength="2"
                required
              />
              <button className="popupMenu__inputs__button">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
