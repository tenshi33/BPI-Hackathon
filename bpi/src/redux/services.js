export const serviceFunction = {
    getData,
    postChatCompletion
  };
  
  function getData() {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  
    return fetch(`http://localhost:3001/api/chathistory/query`, requestOptions)
      .then(handleResponse);
  }
  
  function postChatCompletion(message) {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({message:message}),
      };
  
    return fetch(`http://localhost:3001/api/chatcompletion`, requestOptions)
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
  

  
 