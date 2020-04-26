import {COUNTER_CHANGE, USER_EMAIL, USER_PASSWORD} from '../constants';

const initialState = {
  count: 0,
  email: '',
  password: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    case USER_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case USER_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};
export default appReducer;
