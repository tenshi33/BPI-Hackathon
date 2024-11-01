export const serviceFunction = {
    getData,
    postChatCompletion,
    loginUser,
    registerUser,
    postUserForm
  };
  
  function getData(idUrl) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  
    return fetch(`http://localhost:3002/v1/rest/chatbot/getAll/${idUrl.userID}`, requestOptions)
      .then(handleResponse);
  }
  
  function postChatCompletion(prompt,userData) {
    console.log(prompt,userData.userID, "service")
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({prompt:prompt, userID:userData.userID}),
      };
  
    return fetch(`http://localhost:3002/v1/rest/chatbot/prompt`, requestOptions)
      .then(handleResponse);
  }
  
  function postUserForm(prompt) {
    console.log({prompt:prompt}, "service")
    const requestOptions = {  
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({prompt:prompt}),
      };
  
    return fetch(`http://localhost:3002/v1/rest/users/update`, requestOptions)
      .then(handleResponse);
  }
  
  function loginUser(data) {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data),
      };
  
    return fetch(`http://localhost:3002/v1/rest/users/login`, requestOptions)
      .then(handleResponse);
  }

  function registerUser(data) {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data),
      };
  
    return fetch(`http://localhost:3002/v1/rest/users/register`, requestOptions)
      .then(handleResponse);
  }

  function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }
  

  
 