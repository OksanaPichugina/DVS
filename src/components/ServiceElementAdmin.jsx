import React from "react";
import { apiResImg } from '../utils/Api.js';
import {Api} from '../utils/apiAdmi.js';
import ServicePopup from "./ServicePopup.jsx"

export default function ServiceElementAdmin({ card, apiRes}) {
    const [selectedService, setSelectedService] = React.useState(null);
    function handleClick() {
        setSelectedService(card);
    }
    function closeAllPopups() {
        setSelectedService(null);
      }

   
        function handleDeleteClick() { 
            // props.onCardDelete(props.card); 
            console.log(card.id)
            apiRes.deleteServiceMethod(card.id)
            .then((res)=>{
                console.log(res)
            })
          }
    
    return (
        <div>
        <div className='serviceElement'>
            <button className="serviceElement__delite" onClick={handleDeleteClick} />
            {
                card.images && card.images[0] && (
                    <img src={'http://localhost:8080' + card.images[0].file} className='serviceElement__img' />
                )
            }
            {/* <img src={'http://localhost:8080' + card.images[0].file} className='serviceElement__img' /> */}
            <p className='serviceElement__text'>{card.offerName}</p>
            <button className='serviceElement__button' onClick={handleClick}>Подробнее</button>
        </div>

<ServicePopup card={selectedService} closeAllPopups={closeAllPopups} />
</div>
    )

}