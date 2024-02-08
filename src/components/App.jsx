import "../index.css";
import Main from "./Main.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login.jsx';
import AdminPanel from "./AdminPanel.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import * as auth from "../utils/auth.js";
import { useNavigate } from "react-router-dom";


function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = ({ email, password }) => {
    setEmail(email);
    setPassword(password)
    return auth.authorize(email, password,).then((res) => {
      console.log('!!!!!!!!', res);
      if (res.ok) {
        setLoggedIn(true);
        // localStorage.setItem("token", res.token); 
        
        navigate("/adminPanel", { replace: true });
      } else {
        console.log('ощиька');
      }


    }).catch((err) => {
      console.log(err);

    })
  };

  
  return (
    <div className="App">
      <div className="body">
        <div className="page">
          <Routes>

            <Route
              path="/adminPanel"
              element={
                <ProtectedRoute
                  element={AdminPanel}
                  loggedIn={loggedIn}
                  email={email}
                  password={password}
                />
              }
            />

            <Route
              path="/adminLogin"
              element={
                < Login handleLogin={handleLogin} loggedIn={loggedIn} />
              }
            />
            <Route
              path="/"
              element={
                <Main />
              }
            />

          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
