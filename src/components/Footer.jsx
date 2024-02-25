import React from "react";
import logoFooter from "../images/logoFooter.svg";
import footerLogoBLUE from '../images/logoBLUEFooter.svg'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  
  return (
    <div className="footer">
      <div className="footer__one">
        <div className="footer__one__block">
          <p className="footer__one__block__text">НАШ АДРЕС</p>
          <p className="footer__one__block__text_smal">
            {" "}
            Саратов, ул. Окольная 3-я, 17/3, 410047{" "}
          </p>
        </div>
        <div className="footer__one__block">
          <div className="footer__one__block_dop">
          <nav  id="navbar">
        
          <ul className="footer__one__block__ul">
            <li className="footer__one__block__text">
              <Link
                activeClass="active"
                to="Header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Наверх
              </Link>
            </li>
            <li className="footer__one__block__text">
              <Link
                activeClass="active"
                to="Services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Услуги
              </Link>
            </li>
            <li className="footer__one__block__text">
              <Link
                activeClass="active"
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Портфолио
              </Link>
            </li>
            
          </ul>
       
      </nav>
           
            <div className="footer__one__block__flex">
            
            </div>
          </div>
        </div>
      </div>
      <div className="footer__two">
        <div className="footer__two__block">
          <p className="footer__two__block__title">Телефон</p>
          <p className="footer__two__block__text">+7 (903) 045-68-12</p>
          <p className="footer__two__block__text">+7 (845) 255-68-80</p>
        </div>
        <div className="footer__two__block">
          <p className="footer__two__block__title">Электронная почта</p>
          <p className="footer__two__block__text">ooo-dvs@yandex.ru</p>
        </div>
      </div>
      <div className="footer__three">
        <img className="footer__three__img" src={footerLogoBLUE}></img>
        <p className="footer__three__text">© ООО «ДВС» 2023</p>
      </div>
    </div>
  );
}
