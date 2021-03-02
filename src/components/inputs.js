import { connect } from "react-redux";
import { Dropdown, Input, Form, Label } from "semantic-ui-react";
import _ from "lodash";

import {
  setFirstCurrency,
  setSecondCurrency,
  setFirstAmount,
  setSecondAmount,
} from "../redux/actions/index";

const Inputs = ({
  currencies,
  identity,
  setFirstCurrency,
  setSecondCurrency,
  setFirstAmount,
  setSecondAmount,
  currency,
}) => {
  const currencyOptions = _.values(
    _.mapValues(currencies, (currency, index) => ({
      key: index,
      text: `${currency} (${index})`,
      value: index,
    }))
  );

  const onChangeCurrency = (event, data) => {
    const val = data.value;
    identity === "first-value" ? setFirstCurrency(val) : setSecondCurrency(val);
  };

  const onChangeAmount = (event) => {
    const val = event.target.value;
    identity === "first-value" ? setFirstAmount(val) : setSecondAmount(val);
  };

  const { first, second } = currency;

  return (
    <Form>
      <Form.Field>
        <Label basic pointing="below">
          Currency
        </Label>
        <Dropdown
          fluid
          selection
          search
          options={currencyOptions}
          value={identity === "first-value" ? first.currency : second.currency}
          onChange={onChangeCurrency}
        />
      </Form.Field>
      <Form.Field>
        <Label basic pointing="below">
          Amount
        </Label>
        <Input
          fluid
          type="number"
          value={identity === "first-value" ? first.amount : second.amount}
          onChange={onChangeAmount}
        />
      </Form.Field>
    </Form>
  );
};

const mapStateToPros = (state) => {
  return { currencies: state.currencies, currency: state.currency };
};

export default connect(mapStateToPros, {
  setFirstCurrency,
  setSecondCurrency,
  setFirstAmount,
  setSecondAmount,
})(Inputs);
