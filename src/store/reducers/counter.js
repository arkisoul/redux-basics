import {INCREMENT, DECREMENT} from '../actions/counter'

const initialState = {
  count: 0,
};

const reducer = (state = initialState, {type}) => {
  if (type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  } else {
    return state;
  }
};

export default reducer;