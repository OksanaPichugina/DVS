import React from "react";
import { useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AboutUs from "./AboutUs.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Reviews from "./Reviews.jsx";
import MenuPopup from './MenuPopup.jsx'
import ServicePopup from "./ServicePopup.jsx";
import apiRes from '../utils/Api.js';

export default function Main() {

  const [selectedService, setSelectedService] = React.useState(null);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handleServiceClick(card) {

    setSelectedService(card);
  }
  function handleMenuClick(card) {

    setMenuOpen(true)
  }
  function closeAllPopups() {
    setSelectedService(null);
    setMenuOpen(false)
  }

  const [services, setServices] = React.useState([]);
  const [portfolio, setPortfolio] = React.useState([]);
  React.useEffect(() => { 
    apiRes 
      .getServiceMethod() 
      .then((res) => { 
        setServices(res.data); 
      }) 
      .catch((err) => { 
        //попадаем сюда если один из промисов завершатся ошибкой 
        console.log(err); 
      }); 
  }, []); 

  React.useEffect(() => { 
    apiRes 
      .getPortfolioMethod() 
      .then((res) => { 

        setPortfolio(res.data); 
      }) 
      .catch((err) => { 
        //попадаем сюда если один из промисов завершатся ошибкой 
        console.log(err); 
      }); 
  }, []); 


  return (
    <div>
      <div id='Header'>
      <Header  onMenuClick = {handleMenuClick}/>
      </div>
      <div id='AboutUs'>
      <AboutUs  />
      </div>
      <div id='Services'>
      <Services onServiceClick={handleServiceClick} servicesBase={services} />
      </div>
      <div id='Portfolio'>
 ё <Portfolio  portfolioBase={portfolio} /> 
      </div>
      <Footer />
      <ServicePopup card={selectedService} closeAllPopups={closeAllPopups} />
      <MenuPopup closeAllPopups={closeAllPopups} isOpen = {isMenuOpen} />
    </div>
  );
}
