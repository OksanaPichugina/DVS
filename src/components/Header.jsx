import headerLogo from "../images/logo.svg";
import menu from "../images/menu.svg";
import telephone from "../images/telephone.svg";
import hatImg from "../images/hatImage.png";
import headerLogoBLUE from '../images/logoBLUE.svg';
import React from "react";

export default function Header(props) {
  function handleClick() {

    props.onMenuClick(true);
  }
  return (
    <header className="header">
      <div className="header_black">
        <p className="hader_black__text">Саратов, ул. Окольная 3-я, 17/3</p>
      </div>
      <div className="header_white">
        <img className="header_white__img" src={headerLogoBLUE}></img>
        <button className="header_white__button" onClick={handleClick}>
          <img className="header_white__button__img" src={menu}></img>
          <p className="header_white_text">Меню</p>
        </button>
        <div className="header_white__2telephone">
          <div className="header_white__telephone">
            <p className="header_white_text">+7 (903) 045-68-12</p>
            <img className="header_white__telephone__img" src={telephone}></img>
          </div>
          <div className="header_white__telephone">
            <p className="header_white_text">+7 (845) 255-68-80</p>
            <img className="header_white__telephone__img" src={telephone}></img>
          </div>
        </div>
      </div>
      <div className="header_hat">
        <div className="header_hat__name">
          <div className="header_hat__phrase">
            <p className="header_hat__phrase__text">монолитные конструкции <br />

              <p className="header_hat__phrase__text_blue"> / </p>
              бетонные корпуса</p>

          </div>
        </div>
        <img className="header_hat__img" src={hatImg}></img>
      </div>
      <button className="header_hat__button" onClick={() => { props.onMenuClick(true); }}>
        <p className="header_hat__button__text">Оставить <br /> заявку</p>
      </button>
    </header>
  );
}
