import { FETCH_CURRENCIES } from "../actions/types";

const currencyReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return action.payload;
    default:
      return state;
  }
};

export default currencyReducer;
