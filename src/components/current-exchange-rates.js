import { useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import _ from "lodash";

const ConvertExchangeRates = ({ quotes, currencies, currency }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const newQuotes = getQuotes();
    const _rows = _.values(
      _.mapValues(currencies, (value, key) => (
        <Table.Row key={key}>
          <Table.Cell>{key}</Table.Cell>
          <Table.Cell>{value}</Table.Cell>
          <Table.Cell>
            {newQuotes[`${currency.first.currency}${key}`]}
          </Table.Cell>
        </Table.Row>
      ))
    );

    setRows(_rows);
  }, [quotes, currencies, currency]);

  function getQuotes() {
    const firstCurrency = currency.first.currency;
    if (firstCurrency === "USD") {
      return quotes;
    }
    let newQuotes = {};
    for (var key in currencies) {
      newQuotes[firstCurrency + key] =
        quotes[`USD${firstCurrency}`] / quotes[`USD${key}`];
    }

    return newQuotes;
  }

  return (
    <div>
      <Header as="h3" style={{ marginTop: "2em" }}>
        {`${currencies[currency.first.currency]} (${
          currency.first.currency
        }) Exchange Rates`}
      </Header>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Currency</Table.HeaderCell>
            <Table.HeaderCell>Currency Name</Table.HeaderCell>
            <Table.HeaderCell>
              Exchange Rate = 1 {currency.first.currency}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table>
    </div>
  );
};

const mapStateToPros = (state) => {
  return {
    quotes: state.quotes,
    currencies: state.currencies,
    currency: state.currency,
  };
};

export default connect(mapStateToPros)(ConvertExchangeRates);
