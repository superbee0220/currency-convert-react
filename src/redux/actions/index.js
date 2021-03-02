import {
  FETCH_CURRENCIES,
  FETCH_QUOTES,
  SET_FIRST_AMOUNT,
  SET_FIRST_CURRENCY,
  SET_SECOND_AMOUNT,
  SET_SECOND_CURRENCY,
} from "./types";
import currencyAPi from "../../apis/currencyApi";

export const fetchCurrencies = () => async (dispatch) => {
  const res = await currencyAPi.get("/list");
  if (res.status === 200) {
    dispatch({ type: FETCH_CURRENCIES, payload: res.data.currencies });
  } else {
    return null;
  }
};

export const fetchQuotes = () => async (dispatch, getState) => {
  const res = await currencyAPi.get("/live");
  if (res.status === 200) {
    dispatch({ type: FETCH_QUOTES, payload: res.data.quotes });

    const { quotes, currency } = getState();
    dispatch({
      type: SET_SECOND_AMOUNT,
      payload:
        parseInt(currency.first.amount * getRate(quotes, currency) * 1000) /
        1000,
    });
  } else {
    return null;
  }
};

export const setFirstCurrency = (currency_type) => (dispatch, getState) => {
  dispatch({ type: SET_FIRST_CURRENCY, payload: currency_type });
  const { quotes, currency } = getState();
  dispatch({
    type: SET_SECOND_AMOUNT,
    payload:
      parseInt(currency.first.amount * getRate(quotes, currency) * 1000) / 1000,
  });
};

export const setSecondCurrency = (currency_type) => (dispatch, getState) => {
  dispatch({ type: SET_SECOND_CURRENCY, payload: currency_type });
  const { quotes, currency } = getState();
  dispatch({
    type: SET_SECOND_AMOUNT,
    payload:
      parseInt(currency.first.amount * getRate(quotes, currency) * 1000) / 1000,
  });
};

export const setFirstAmount = (val) => (dispatch, getState) => {
  dispatch({ type: SET_FIRST_AMOUNT, payload: val });
  const { quotes, currency } = getState();
  dispatch({
    type: SET_SECOND_AMOUNT,
    payload:
      parseInt(currency.first.amount * getRate(quotes, currency) * 1000) / 1000,
  });
};

export const setSecondAmount = (val) => (dispatch, getState) => {
  dispatch({ type: SET_SECOND_AMOUNT, payload: val });
  const { quotes, currency } = getState();
  dispatch({
    type: SET_FIRST_AMOUNT,
    payload:
      parseInt((currency.second.amount / getRate(quotes, currency)) * 1000) /
      1000,
  });
};

const getRate = (quotes, currency) => {
  const firstCurrency = currency.first.currency;
  const secondCurrency = currency.second.currency;
  let rate = 1;
  if (firstCurrency === "USD") {
    rate = quotes[`USD${secondCurrency}`];
  } else if (firstCurrency !== secondCurrency) {
    rate = quotes[`USD${secondCurrency}`] / quotes[`USD${firstCurrency}`];
  }

  return rate;
};
