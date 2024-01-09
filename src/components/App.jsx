import "../index.css";
import Main from "./Main.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Login from './Login.jsx';
import AdminPanel from "./AdminPanel.jsx";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false); 
  /* const navigate = React.useNavigate(); */

  // const handleLogin = ({ password, email }) => { 
  //   return auth.authorize(password, email).then((res) => { 
  //     console.log(res); 
  //     if (res.token) { 
  //       setLoggedIn(true); 
  //       localStorage.setItem("token", res.token); 
         
  //       navigate("/admin0409",{replace: true}); 
  //     } 
  //   }) .catch((err) => { 
  //     console.log(err); 
  //   }) 
  // }; 

  return (
    <div className="App">
      <div className="body">
        <div className="page">
        <Routes> 
                <Route 
                  path="/adminLogin" 
                  element={ 
                    < Login /*handleLogin={handleLogin}  loggedIn={loggedIn}*/ /> 
                  } 
                /> 
                <Route 
                  path="/" 
                  element={ 
                    <Main/> 
                  } 
                /> 
                <Route 
                  path="/adminPanel" 
                  element={ 
                    <AdminPanel/> 
                  } 
                /> 
          </Routes>      

        </div>
      </div>
    </div>
  );
}

export default App;
