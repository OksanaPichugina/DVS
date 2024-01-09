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


  return (
    <div>
      <div id='Header'>
      <Header  onMenuClick = {handleMenuClick}/>
      </div>
      <div id='AboutUs'>
      <AboutUs  />
      </div>
      <div id='Services'>
      <Services onServiceClick={handleServiceClick}  />
      </div>
      <div id='Portfolio'>
      <Portfolio  />
      </div>
      <Footer />
      <ServicePopup card={selectedService} closeAllPopups={closeAllPopups} />
      <MenuPopup closeAllPopups={closeAllPopups} isOpen = {isMenuOpen} />
    </div>
  );
}
