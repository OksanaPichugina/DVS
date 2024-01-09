import React from "react";
export default function ServicePopup({ card, closeAllPopups }) {
  return (
    <div className={card ? "popup servicePopup popup_opened" : "popup"}>
      <div className="popup__container">
        <button  type="button" 
          id="close-popup-image" 
          onClick={closeAllPopups} 
          className="popup__close-button"></button>
        <div className="popup__form">
          <p className="popup__form__name">{card ? card.name : ''}</p>
          <p className="popup__form__about">{card ? card.about : ''}</p>
        </div>
      </div>
    </div>
  );
}
