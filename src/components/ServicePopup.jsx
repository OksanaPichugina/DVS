
import React, { useState, useEffect } from 'react';
export default function ServicePopup({ card, closeAllPopups }) {
  function loadAndInsertHTMLFile(url, targetDivId) {
    var xhr = new XMLHttpRequest();
    const baseUrl = 'http://localhost:8080';

var url = baseUrl + url
console.log(url)
xhr.open("GET", url, true);
xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
    var newDiv = document.createElement('div');
    newDiv.innerHTML = xhr.responseText;
    console.log(xhr.responseText) ;
    console.log(xhr.response); // Выводим содержимое загруженного файла в консоль
    
    document.getElementById(targetDivId).appendChild(newDiv);

  } else {
    console.error("Error! Status:" + xhr.status);
  }
};

xhr.send();
}



  return (
    <div className={card ? "popup servicePopup popup_opened" : "popup"}>
       <div className="popup__container">
         <button type="button" 
           id="close-popup-image" 
           onClick={closeAllPopups} 
           className="popup__close-button"></button>
         <div className="popup__form">
           <div className="popup__form__about" id = "input_service_popup">
            {card ? loadAndInsertHTMLFile(card.offerDescription.file, 'input_service_popup') : ''}
           </div>
         </div>
       </div>
     </div>
  );
}


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

// export default function ServicePopup({ card, closeAllPopups }) {
//   const [popupContent, setPopupContent] = useState();
//   const reader = new FileReader();
//   useEffect(() => {
//     if (card) {
//       // reader.readAsText();
//       reader.readAsDataURL(card.offerDescription.file);

//       const url = card.offerDescription.file; // Замените на URL вашего HTML файла
//       console.log(card.offerDescription.file)
//       fetch(url)
//         .then(response => {console.log(response); return response.text()})
//         .then(data => {console.log (data) ; setPopupContent(data)})
//         .catch(error => console.error('Ошибка при загрузке файла:', error));
//     }
//   }, [card]);

//   return (
//     <div className={card ? "popup servicePopup popup_opened" : "popup"}>
//        <div className="popup__container">
//          <button type="button" 
//            id="close-popup-image" 
//            onClick={closeAllPopups} 
//            className="popup__close-button"></button>
//          <div className="popup__form">
//            <p className="popup__form__name">{card ? card.offerName : ''}</p>
//            <div className="popup__form__about" dangerouslySetInnerHTML={{__html: card ? reader.result : ''}}>
//            </div>
//          </div>
//        </div>
//      </div>
//   );
// }










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
