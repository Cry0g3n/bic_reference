import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";
import { rgba } from "polished";

import Button from "../Button";
import {
  fetchAddItemRequest,
  fetchEditItemRequest,
  setMode
} from "../../actions/reference";
import Edit from "../Edit";
import { getMode, getSelectedItem } from "../../reducers/reference";

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, calc(100% / 3));
  grid-template-columns: 50% 50%;
  height: 150px;
  width: 600px;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: #f0f0f0;
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  a:not(:first-child) {
    margin-left: 5px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: ${rgba("black", 0.5)};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = styled.span`
  color: red;
`;

const enhance = compose(
  connect(
    state => ({
      selectedItem: getSelectedItem(state),
      mode: getMode(state)
    }),
    {
      setMode,
      fetchAddItemRequest,
      fetchEditItemRequest
    }
  )
);

class EditorForm extends PureComponent {
  fieldList = [
    {
      sysName: "bic",
      name: "БИК"
    },
    {
      sysName: "bankName",
      name: "Название банка"
    },
    {
      sysName: "corAccount",
      name: "Кор. счет"
    },
    {
      sysName: "bankAddress",
      name: "Адрес"
    }
  ];

  buttonList = [
    {
      caption: "Сохранить",
      onClick: e => {
        e.preventDefault();
        const { item } = this.state;
        const emptyValues = Object.values(item).filter(value => !value);
        if (emptyValues.length) {
          this.setState({
            error: "Для сохранения необходимо заполнить все поля формы!"
          });
          return;
        }
        const { fetchAddItemRequest, mode, fetchEditItemRequest } = this.props;

        switch (mode) {
          case "ADD":
            fetchAddItemRequest(item);
            break;
          case "EDIT":
            fetchEditItemRequest(item);
            break;
          default:
            break;
        }
      }
    },
    {
      caption: "Отмена",
      onClick: e => {
        e.preventDefault();
        const { setMode } = this.props;
        setMode("BROWSE");
      }
    }
  ];

  state = {
    item: {
      bic: "",
      bankName: "",
      corAccount: "",
      bankAddress: ""
    },
    error: undefined
  };

  changeHandler = e => {
    const { item } = this.state;
    this.setState({
      item: { ...item, [e.target.name]: e.target.value },
      error: undefined
    });
  };

  componentDidMount() {
    const { selectedItem, mode } = this.props;
    if (mode === "EDIT") {
      this.setState({
        item: selectedItem
      });
    }
  }

  render() {
    const { item, error } = this.state;

    return ReactDOM.createPortal(
      <Wrapper>
        <FormContainer>
          {this.fieldList.map((field, i) => (
            <FieldContainer key={i}>
              <Edit
                name={field.sysName}
                placeholder={field.name}
                value={item[field.sysName]}
                onChange={this.changeHandler}
              />
            </FieldContainer>
          ))}
          <FieldContainer>
            {this.buttonList.map((button, i) => (
              <Button
                key={i}
                caption={button.caption}
                handleClick={button.onClick}
              />
            ))}
          </FieldContainer>
          <FieldContainer>
            {error ? <Error>{error}</Error> : null}
          </FieldContainer>
        </FormContainer>
      </Wrapper>,
      document.getElementById("modal")
    );
  }
}

export default enhance(EditorForm);
