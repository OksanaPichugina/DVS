import React, { useState, useEffect } from "react";
import ServiceElementAdmin from "./ServiceElementAdmin";
import PortfolioElementAdmin from "./PortfolioElementAdmin";
import {Api} from '../utils/apiAdmi.js';

export default function AdminPanel(props) {
  function makeBasicAuthHeader(email,password) {
    const BASE_URL = 'http://localhost:8080';
    const base64Credentials = btoa(`${email}:${password}`);
    return `Basic ${base64Credentials}`;
  };

  const api = { 
    url: "http://localhost:8080", 
    headers: { 
      "Content-Type": "application/json",
      'Authorization': makeBasicAuthHeader(props.email, props.password), 
    }
  }; 

  const api2 = { 
    url: "http://localhost:8080", 
    headers: { 
      'Authorization': makeBasicAuthHeader(props.email, props.password), 
    }
  }; 
   
  const apiRes = new Api(api); 
  const apiResImg = new Api(api2)

  const [services, setServices] = React.useState([]);
  const [portfolio, setPortfolio] = React.useState([]);
  React.useEffect(() => { 
    apiRes 
      .getServiceMethod() 
      .then((res) => { 
        console.log(res.data)
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

  // const renderItems = () => {
  //   return portfolio.map((item) => <PortfolioElementAdmin card={item} apiRes={apiRes}/>);
  // };

  function handleAddServiceSubmit(name, description, img) { 
    console.log(name,description,img)
    apiRes 
      .postServiceMethod(name, description,img)
      .then((res) => { 
        setServices([res, ...services]); 
      }) 
      .catch((err) => { 
        //попадаем сюда если один из промисов завершатся ошибкой 
        console.log(err); 
      }); 
  } ;

  function handleAddPortfolioSubmit(name, img) { 
    apiRes 
      .postPortfolioMethod(name, img)
      .then((res) => { 
        setPortfolio([res.data, ...portfolio]); 
      }) 
      .catch((err) => { 
        //попадаем сюда если один из промисов завершатся ошибкой 
        console.log(err); 
      }); 
  } ;
  const [serviceNameState, setServiceNameState] = React.useState(""); 
  const [serviceDescriptionState, setServiceDescriptionState] = React.useState(""); 
  const [serviceImgState, setServiceimgState] = React.useState(''); 
  const [portfolioNameState, setPortfolioNameState] = React.useState(""); 
  const [portfolioImgState, setPortfolioimgState] = React.useState(''); 
  function handleSubmitService(e) { 
    // Запрещаем браузеру переходить по адресу формы 
    e.preventDefault();  
    handleAddServiceSubmit(serviceNameState,serviceDescriptionState,serviceImgState) 
  } 

  function handleSubmitPortfolio(e) { 
    // Запрещаем браузеру переходить по адресу формы 
    e.preventDefault(); 
 
    // Передаём значения управляемых компонентов во внешний обработчик 
    handleAddPortfolioSubmit(portfolioNameState,portfolioImgState) 
  } 

  function postImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    apiResImg.postImgMethod(formData)
      .then((res) => { 
        console.log(res);
        setServiceimgState(res.data.uuuid);
      }) 
      .catch((err) => { 
        console.log(err); 
      });
    
  }

  function postDescription(file) {
    const formData = new FormData();
    formData.append('file', file);
    apiResImg.postImgMethod(formData)
      .then((res) => { 
        console.log(res);
        setServiceDescriptionState(res.data.uuuid);
      }) 
      .catch((err) => { 
        console.log(err); 
      });
    
  }

  function postImagePortfolio(file) {
    const formData = new FormData();
    formData.append('file', file);
    apiResImg.postImgMethod(formData)
      .then((res) => { 
        console.log(res);
        setPortfolioimgState(res.data.uuuid);
      }) 
      .catch((err) => { 
        console.log(err); 
      });
    
  }
  
 
  const renderItemsBase = () => {
    if (portfolio.length > 0 ) {
      return portfolio.map((item) => (
        <PortfolioElementAdmin card={item} apiRes={apiRes} />
      ));
    }
    } 
  

  

  return (
    <>
      <div className="header_black">
        <p className="hader_black__text">Саратов, ул. Окольная 3-я, 17/3</p>
      </div>

      <form className="popup__form_log" method="post" onSubmit={handleSubmitService} encType="multipart/form-data">
        <h2 className="popup__title_log">Услуги</h2>
        <div className="form">
          <input
            name="name"
            id="nameService-input"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="100"
            required
            className="popup__input"
            onChange={(e) => { setServiceNameState(e.target.value)}} 
          />
          <input
            name="description"
            id="descriptionService-input"
            type="file" 
            placeholder="Описание"
            required
            className="popup__input popup__input_dop"
            onChange={(e) => {postDescription (e.target.files[0])}} 
          />
          <input
            name="photo"
            id="photoService-input"
            type="file" 
            placeholder="Фото"
            required
            className="popup__input"
            onChange={(e) => {postImage (e.target.files[0])}} 
          />
        </div>
        <button
          type="submit"
          className="popupMenu__inputs__button_dop"
          onSubmit={handleSubmitService} 
        >
          Добавить
        </button>
      </form>
      <div className="portfolio__grid_dop">
      {services.map((item) => {
          return (
            <ServiceElementAdmin card={item} apiRes={apiRes} />
          );
        })}
      </div> 
      <form className="popup__form_log" onSubmit={handleSubmitPortfolio}  encType="multipart/form-data">
        <h2 className="popup__title_log">Портфолио</h2>
        <div className="form">
          <input
            name="name"
            id="namePortfolio-input"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="100"
            required
            className="popup__input"
            onChange={(e) => { setPortfolioNameState(e.target.value)}}
          />
          <input
            name="photo"
            id="photoPortfolio-input"
            type="file" 
            placeholder="Фото"
            required
            className="popup__input"
            onChange={(e) => {postImagePortfolio (e.target.files[0])}} 
          />
        </div>
        <button
          type="submit"
          className="popupMenu__inputs__button_dop"
           onSubmit={handleSubmitPortfolio} 
        >
          Добавить
        </button>
      </form>
       <div className="portfolio__grid">{renderItemsBase()}</div> 
      
    </>

  );
}
