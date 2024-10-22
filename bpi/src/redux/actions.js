import { GET_DATA, SEND_MESSAGE } from './constants';
import { serviceFunction } from './services';

export const actionName = {
  getData,
  postChatCompletion,
};

function getData() {
  return (dispatch) => {
    dispatch(request());

    serviceFunction.getData().then(
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
function postChatCompletion(message) {
    return (dispatch) => {
        dispatch(request());

        serviceFunction.postChatCompletion(message).then(
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
