export const BASE_URL = 'http://localhost:8080';



  function makeBasicAuthHeader(username, password) {
    const base64Credentials = btoa(`${username}:${password}`);
    return `Basic ${base64Credentials}`;
  }
  
  
export const authorize = (email ,password) => {
    return fetch(`${BASE_URL}/account/auth`, { 
      method: "POST", 
      headers: { 
        Accept: "application/json", 
        "Content-Type": "application/json",
        'Authorization': makeBasicAuthHeader(email, password)
      }, 
    }) 

  }; 
   

   