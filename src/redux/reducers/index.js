import { combineReducers } from "redux";

import currenciesReducer from "./currenciesReducer";
import quotesReducer from "./quotesReducers";
import currencyReducer from "./currencyReducer";

export default combineReducers({
  currencies: currenciesReducer,
  quotes: quotesReducer,
  currency: currencyReducer,
});
