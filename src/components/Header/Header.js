import React, { PureComponent } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";

import Button from "../Button";
import { setMode, setSelectedItem } from "../../actions/reference";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 10px;
  background-color: #ff8663;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  color: white;
`;

const Title = styled.span`
  font-weight: bold;
`;

const enhance = compose(
  connect(null, {
    setMode,
    setSelectedItem
  })
);

class Header extends PureComponent {
  handleAdd = e => {
    e.preventDefault();
    const { setMode, setSelectedItem } = this.props;
    setSelectedItem(null);
    setMode("ADD");
  };

  render() {
    return (
      <HeaderContainer>
        <Title>Справочник БИКов</Title>
        <Button caption="Добавить" handleClick={this.handleAdd} invert={true} />
      </HeaderContainer>
    );
  }
}

export default enhance(Header);
