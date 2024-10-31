import { GET_DATA, SEND_MESSAGE, LOGIN , LOGOUT, REGISTER, SEND_USER_FORM} from './constants';

const initialState = {      
  data: [],  
  message: [],
  userID: localStorage.getItem('userID') || "",
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
        message: action.message, 
      };
    case SEND_MESSAGE.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case LOGIN.REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN.SUCCESS:
        console.log('Reducer - UserID received:', action.userID);
        return {
          ...state,
          loading: false,
          userID: action.userID,
        };
      case LOGIN.FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        case REGISTER.REQUEST:
          return {
            ...state,
            loading: true,
          };
        case REGISTER.SUCCESS:
          console.log('Reducer - UserID received:', action.userID);
          return {
            ...state,
            loading: false,
            userID: action.regResponse,
          };
        case REGISTER.FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error,
          };
        case LOGOUT.SUCCESS:
          return {
            ...state,
            loading: false,
            userID: "",
          };
        case SEND_USER_FORM.SUCCESS:
        return {
          ...state,
          loading: false,
          form: action.form,
        }
        case SEND_USER_FORM.FAILURE:
          return {
            ...state,
            loading: false,
            error : action.error
          }
        case SEND_USER_FORM:
          return {
            ...state,
            loading: true
          }
    default:
      return state;
  }
}
