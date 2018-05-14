import React, { Component } from "react";
import styled from "styled-components";

import Edit from "../Edit";
import { setFilterParams } from "../../actions/reference";
import { compose } from "recompose";
import { connect } from "react-redux";

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #f0f0f0;

  input:not(:last-child) {
    margin-right: 10px;
  }
`;

const enhance = compose(
  connect(null, {
    setFilterParams
  })
);

class Search extends Component {
  changeHandler = e => {
    const { name, value } = e.target;
    this.props.setFilterParams({ [name]: value });
  };

  render() {
    return (
      <SearchContainer>
        <Edit
          name="bic"
          placeholder="Поиск по БИК"
          onChange={this.changeHandler}
        />
        <Edit
          name="bankName"
          placeholder="Поиск по названию банка"
          onChange={this.changeHandler}
        />
      </SearchContainer>
    );
  }
}

export default enhance(Search);
