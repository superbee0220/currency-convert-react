import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";

import CurrencyConvert from "./currency-convert";
import CurrentExchangeRates from "./current-exchange-rates";
import Header from "./header";
import { fetchCurrencies, fetchQuotes } from "../redux/actions";

const App = (props) => {
  useEffect(() => {
    props.fetchCurrencies();
    props.fetchQuotes();
  }, []);
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={CurrencyConvert} />
          <Route
            exact
            path="/current-exchange-rates"
            component={CurrentExchangeRates}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default connect(null, { fetchCurrencies, fetchQuotes })(App);
