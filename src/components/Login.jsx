
import React, { useState, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 

export default function Login(props) { 
//   const [email, setEmail] = useState(""); 
//   const [password, setPassword] = useState(""); 
//   const navigate = useNavigate(); 
//   const resetForm = () => { 
//     setEmail(""); 
//     setPassword(""); 
//   }; 
 
//   const handleSubmit = (e) => { 
//     e.preventDefault(); 
//     props.handleLogin({ password, email }) 
//   }; 
//   useEffect(() => { 
//     if (!props.loggedIn) { 
//       resetForm(); 
//     } 
// }, [props.loggedIn]); 
  
  return ( 
    <> 
        <div className="header_black">
        <p className="hader_black__text">Саратов, ул. Окольная 3-я, 17/3</p>
      </div>
      <form className="popup__form_log" /*onSubmit={handleSubmit} */> 
        <h2 className="popup__title_log">Вход</h2> 
        <div className="form"> 
          <input 
            name="email" 
            id="email-input" 
            type="email" 
            placeholder="Email" 
            minLength="2" 
            maxLength="40" 
            required 
            className="popup__input" 
            /* value={email} */
            /* onChange={(e) => setEmail(e.target.value)} */
          /> 
          <input 
            name="password" 
            id="password-input" 
            type="password" 
            placeholder="Пароль" 
            minLength="2" 
            maxLength="40" 
            required 
            className="popup__input" 
           /* value={password} */
           /* onChange={(e) => setPassword(e.target.value)} */
          /> 
        </div> 
        <button 
          type="submit" 
          className="popupMenu__inputs__button" 
         /* onSubmit={handleSubmit} */
        > 
          Войти 
        </button> 
      </form> 
    </> 
  ); 
} 
