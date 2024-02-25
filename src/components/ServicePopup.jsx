
import React, { useState, useEffect } from 'react';

// export default function ServicePopup({ card, closeAllPopups }) {
//   const [fileContent, setFileContent] = useState(null);

//   useEffect(() => {
//     if (card) {
//       readFile(card.offerDescription.file)
//         .then(content => setFileContent(content))
//         .catch(error => console.error('Error reading file:', error));
//     }
//   }, [card]);

//   return (
//     <div className={card ? "popup servicePopup popup_opened" : "popup"}>
//       <div className="popup__container">
//         <button type="button" onClick={closeAllPopups} className="popup__close-button"></button>
//         <div className="popup__form">
//           <p className="popup__form__name">{card ? card.offerName : ''}</p>
//           <div className="popup__form__about">
//             {fileContent !== null ? <p>{fileContent}</p> : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ServicePopup({ card, closeAllPopups }) {
  const [popupContent, setPopupContent] = useState();

  useEffect(() => {
    if (card) {
      const url = card.offerDescription.file; // Замените на URL вашего HTML файла
      console.log(card.offerDescription.file)
      fetch(url)
        .then(response => response.text())
          .then(data => {console.log (data) ; setPopupContent(data)})
        .catch(error => console.error('Ошибка при загрузке файла:', error));
    }
  }, [card]);

  return (
    <div className={card ? "popup servicePopup popup_opened" : "popup"}>
       <div className="popup__container">
         <button type="button" 
           id="close-popup-image" 
           onClick={closeAllPopups} 
           className="popup__close-button"></button>
         <div className="popup__form">
           <p className="popup__form__name">{card ? card.offerName : ''}</p>
           <div className="popup__form__about" dangerouslySetInnerHTML={{__html: card ? popupContent : ''}}>
           </div>
         </div>
       </div>
     </div>
  );
}










// export default function ServicePopup({ card, closeAllPopups }) {
//   function readFile (file){
//     let res;
//     // const file = event.target.files[0];
//       const reader = new FileReader();
      
//       reader.onload = function(file) {
//         const content = file;
//         res.innerText = content;
//       }

//       reader.readAsText(file, 'UTF-8');
//       return res

//   }
//   return (
//     <div className={card ? "popup servicePopup popup_opened" : "popup"}>
//       <div className="popup__container">
//         <button  type="button" 
//           id="close-popup-image" 
//           onClick={closeAllPopups} 
//           className="popup__close-button"></button>
//         <div className="popup__form">
//           <p className="popup__form__name">{card ? card.offerName : ''}</p>
//           <p className="popup__form__about">{card ? card.offerDescription : ''}</p>
//           <div className="popup__form__about">{readFile (card.offerDescription)}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
