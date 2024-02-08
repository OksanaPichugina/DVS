import React from "react";
export default function PortfolioElement({card }){
    return (
        <div className='portfolioElement'>
            <img  src={'http://localhost:8080' + card.images[0].file} className='portfolioElement__img'/>
            <p className='portfolioElement__text'>{card.portfolioHeader}</p>
        </div>
    )
    
}