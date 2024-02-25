import React from "react";
export default function PortfolioElementAdmin({card,apiRes }){
    function handleDeleteClick() { 
        apiRes.deletePortfolioMethod(card.id)
      }

    return (
        <div className='portfolioElement portfolioElement_dop'>
            <button className="serviceElement__delite" onClick={handleDeleteClick} />
            <img  src={'http://localhost:8080' + card.images[0].file} className='portfolioElement__img'/>
            <p className='portfolioElement__text'>{card.portfolioHeader}</p>
        </div>
    )
    
}