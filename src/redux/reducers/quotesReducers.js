import { FETCH_QUOTES } from "../actions/types";

const quotesReducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return action.payload;
    default:
      return state;
  }
};

export default quotesReducers;
