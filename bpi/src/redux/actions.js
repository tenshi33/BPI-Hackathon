import { GET_DATA, SEND_MESSAGE,LOGIN,LOGOUT,REGISTER,SEND_USER_FORM } from './constants';
import { serviceFunction } from './services';

export const actionName = {
  getData,
  postChatCompletion,
  loginUser,
  logoutUser,
  registerUser,
  postUserForm
};

function getData(idUrl) {
  return (dispatch) => {
    dispatch(request());

    serviceFunction.getData(idUrl).then(
      (data) => {
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_DATA.REQUEST };
  }
  
  function success(data) {
    return { type: GET_DATA.SUCCESS, data };
  }
  
  function failure(error) {
    return { type: GET_DATA.FAILURE, error };
  }
}

function postChatCompletion(message, userID) {
    return (dispatch) => {
        dispatch(request());

        serviceFunction.postChatCompletion(message, userID).then(
            (response) => {
                dispatch(success(response.message)); // Here we use response.message
            },
            (error) => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request() {
        return { type: SEND_MESSAGE.REQUEST };
    }

    function success(message) {
        return { type: SEND_MESSAGE.SUCCESS, message };
    }

    function failure(error) {
        return { type: SEND_MESSAGE.FAILURE, error };
    }
}

function postUserForm(userForm) {
  return (dispatch) => {
      dispatch(request());

      serviceFunction.postUserForm(userForm).then(
          (response) => {
              dispatch(success(response)); // Here we use response.message
          },
          (error) => {
              dispatch(failure(error.toString()));
          }
      );
  };

  function request() {
      return { type: SEND_USER_FORM.REQUEST };
  }

  function success(form) {
      return { type: SEND_USER_FORM.SUCCESS, form };
  }

  function failure(error) {
      return { type: SEND_USER_FORM.FAILURE, error };
  }
}


function loginUser(data) {
  return (dispatch) => {
      dispatch(request());
    
      serviceFunction.loginUser(data).then(
          (response) => {
              console.log(response)
              localStorage.setItem('userID', response);
              dispatch(success(response)); 
          },
          (error) => {
              dispatch(failure(error.toString()));
          }
      );
  };

  function request() {
      return { type: LOGIN.REQUEST };
  }

  function success(userID) {
      return { type: LOGIN.SUCCESS, userID };
  }

  function failure(error) {
      return { type: LOGIN.FAILURE, error };
  }
}

function logoutUser() {
    return (dispatch) => {
        dispatch({ type: LOGOUT.SUCCESS });
      }
    }

  

function registerUser(data) {
  return (dispatch) => {
      dispatch(request());

      serviceFunction.registerUser(data).then(
          (response) => {
              console.log(response)
              localStorage.setItem('userID', response);
              dispatch(success(response)); 
          },
          (error) => {
              dispatch(failure(error.toString()));
          }
      );
  };

  function request() {
      return { type: REGISTER.REQUEST };
  }

  function success(regResponse) {
      return { type: REGISTER.SUCCESS, regResponse };
  }

  function failure(error) {
      return { type: REGISTER.FAILURE, error };
  }
}
