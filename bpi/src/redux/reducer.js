import { GET_DATA, SEND_MESSAGE } from './constants';

const initialState = {      
  data: [],  
  message: [],
  loading: false, 
  error: null,    
};

export function reducerName(state = initialState, action) {
  switch (action.type) {
    case GET_DATA.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_DATA.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SEND_MESSAGE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEND_MESSAGE.SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.message, // Append the new message to the array
      };
    case SEND_MESSAGE.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
