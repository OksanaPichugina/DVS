import React from "react";
export default function PortfolioElement({card }){
    return (
        <div className='portfolioElement'>
            <img src={card.link} className='portfolioElement__img'/>
            <p className='portfolioElement__text'>{card.name}</p>
        </div>
    )
    
}