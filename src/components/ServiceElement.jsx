import React from "react";
import {apiResImg} from '../utils/Api.js';

export default function ServiceElement({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className='serviceElement'>
            {
  card.images && card.images[0] && (
    <img src={'http://localhost:8080' + card.images[0].file} className='serviceElement__img' />
  )
}
            {/* <img src={'http://localhost:8080' + card.images[0].file} className='serviceElement__img' /> */}
            <p className='serviceElement__text'>{card.offerName}</p>
            <button className='serviceElement__button' onClick={handleClick}>Подробнее</button>
        </div>
    )

}