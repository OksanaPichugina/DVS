import React from "react";
import lines from '../images/lines.svg'
import ser0 from '../images/services0.svg';
import ser1 from '../images/services1.svg';
import ser2 from '../images/services2.svg';
import ser3 from '../images/services3.svg';
import ServiceElement from "./ServiceElement";
export default function Services(props) {
  
  return (
    <div className="servicesMain">
      <div className="services">
        <div className="section__name_service">
          <div className="section__name__wrapper">
            <p className="section__name__text">Наши услуги</p>
          </div>
          <p className="section__name__text__slogan">
            Доверьтесь <br />
            мастерам <br />
            своего дела
          </p>
        </div>
        {props.servicesBase.map((item) => {          
          return (
            <ServiceElement card={item} onCardClick={props.onServiceClick} />
          );
        })}
      </div>
      <img src={lines} className="servicesMain__img" />
    </div>
  );
}
