import { Grid, Header, Segment, Divider } from "semantic-ui-react";
import Inputs from "./inputs";
const CurrencyConvert = () => {
  return (
    <div>
      <Header as="h3" style={{ marginTop: "2em" }}>
        Currency Converter
      </Header>
      <div>Please enter the amount you want to convert in any field.</div>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Inputs identity="first-value" />
          </Grid.Column>
          <Grid.Column>
            <Inputs identity="second-value" />
          </Grid.Column>
        </Grid>
        <Divider vertical>&lt;=&gt;</Divider>
      </Segment>
    </div>
  );
};

export default CurrencyConvert;
