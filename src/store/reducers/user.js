import { ADDUSER, REMOVEUSER } from "../actions/user";

const initialState = {
  user: null,
  isLoggedIn: false,
  data: null
};

const reducer = (state = initialState, {type, payload}) => {
  if (type === ADDUSER) {
    return { ...state, user: payload.user, isLoggedIn: true, data: payload.data };
  } else if (type === REMOVEUSER) {
    return { ...state, user: null, isLoggedIn: false };
  } else {
    return state;
  }
};

export default reducer;