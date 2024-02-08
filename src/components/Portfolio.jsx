import React from "react";
import PortfolioElement from "./PortfolioElement";

export default function Portfolo(props) {


  
  const [showAll, setShowAll] = React.useState(false);


  const renderItemsBase = () => {
  if (showAll) {
     return props.portfolioBase.map((item) => (
    <PortfolioElement card={item}  />
  )); } else {
   return props.portfolioBase.slice(0, 3).map((item) => (
    <PortfolioElement card={item}  />
  ));
  }
  };
  return (

      <div className="portfolio">
        <div className="section__name_dop">
          <div className="section__name__wrapper">
            <p className="section__name__text"> Наше портфолио</p>
          </div>
          <p className="section__name__text__slogan">
          работы, которыми <br />
            мы гордимся
          </p>
        </div>
        <div className="portfolio__grid">
        {renderItemsBase()}
        
        </div>
        {!showAll && props.portfolioBase.length > 3 && <button className="serviceElement__button" onClick={() => setShowAll(true)}>Подробнее</button>} 
      </div>
  );
}
