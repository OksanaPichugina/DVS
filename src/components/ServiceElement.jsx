import React from "react";
export default function ServiceElement({card, onCardClick }){
    function handleClick() { 
        console.log(card)
        onCardClick(card); 
    } 
    return (
        <div className='serviceElement'>
            <img src={card.link} className='serviceElement__img'/>
            <p className='serviceElement__text'>{card.name}</p>
            <button className='serviceElement__button' onClick={handleClick}>Подробнее</button>
        </div>
    )
    
}