import {
  SET_FIRST_AMOUNT,
  SET_FIRST_CURRENCY,
  SET_SECOND_AMOUNT,
  SET_SECOND_CURRENCY,
} from "../actions/types";

const INITIAL_STATE = {
  first: {
    currency: "USD",
    amount: 1,
  },
  second: {
    currency: "EUR",
    amount: "",
  },
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FIRST_CURRENCY:
      return {
        ...state,
        first: { currency: action.payload, amount: state.first.amount },
      };
    case SET_FIRST_AMOUNT:
      return {
        ...state,
        first: { currency: state.first.currency, amount: action.payload },
      };
    case SET_SECOND_CURRENCY:
      return {
        ...state,
        second: { currency: action.payload, amount: state.second.amount },
      };
    case SET_SECOND_AMOUNT:
      return {
        ...state,
        second: { currency: state.second.currency, amount: action.payload },
      };
    default:
      return state;
  }
};

export default currencyReducer;
