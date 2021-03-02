import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing={true} pagination widths={2}>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          Currency Convert
        </Menu.Item>
        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
          as={Link}
          to="/current-exchange-rates"
        >
          Currency Exchange Rates
        </Menu.Item>
      </Menu>
    );
  }
}
