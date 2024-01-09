import React from "react";
import PortfolioElement from "./PortfolioElement";
import por0 from '../images/portfolio0.svg';
import por1 from '../images/portfolio1.svg';
import por2 from '../images/portfolio2.svg';
import por3 from '../images/portfolio3.jpg';
import por4 from '../images/portfolio4.jpg';
import por5 from '../images/portfolio5.jpg';
export default function Portfolo() {
  const portfolio = [
    {
      name: "Ресторан Брудершафт г. Саратов, ул. Набережная Космонавтов",
      link: por0,
    },
    {
      name: "Ресторан на территории конно-спортивного комплека «HERMES» в селе Долгий Буерак",
      link: por1,
    },
    {
      name: "Коттеджный поселок в с. Усть-Курдюм",
      link: por2,
    },
    {
      name: "Новые корпуса Военного института МВД России г. Саратов ул. Кутякова /ул. Астраханская",
      link: por3,
    },
    {
      name: "Жилой многоквартирный дом г. Саратов, ул. Т. Шевченко",
      link: por4,
    },
    {
      name: "Ресторан Брудершафт г. Саратов, ул. Набережная Космонавтов",
      link: por5,
    },
  ];
  const [showAll, setShowAll] = React.useState(false);

  const renderItems = () => {
    if (showAll) {
      return portfolio.map((item) => (
        <PortfolioElement card={item}  />
      ));
    } else {
      return portfolio.slice(0, 3).map((item) => (
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
        {renderItems()}
        
        </div>
        {!showAll && portfolio.length > 3 && <button className="serviceElement__button" onClick={() => setShowAll(true)}>Подробнее</button>}
      </div>
  );
}
