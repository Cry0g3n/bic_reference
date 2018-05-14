import React, { PureComponent } from "react";
import styled from "styled-components";
import Button from "../Button";

const ItemContainer = styled.div`
  display: grid;
  grid-template-rows: ${props =>
    props.selected ? "repeat(3, calc(100% / 3))" : "repeat(2, calc(100% / 2))"};
  grid-template-columns: 50% 50%;
  height: ${props => (props.selected ? "150px" : "100px")};
  width: 100%;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  background-color: white;
`;

const FieldContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  a:not(:first-child) {
    margin-left: 5px;
  }
`;

const FieldTitle = styled.span`
  margin-right: 10px;
`;

const FieldValue = styled.span`
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

class Item extends PureComponent {
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
      caption: "Редактировать",
      onClick: e => {
        e.preventDefault();
        const { handleItemEdit } = this.props;
        handleItemEdit();
      }
    },
    {
      caption: "Удалить",
      onClick: e => {
        e.preventDefault();
        const { handleItemDelete } = this.props;
        handleItemDelete();
      }
    }
  ];

  render() {
    const { handleItemClick, selected } = this.props;

    return (
      <ItemContainer selected={selected}>
        {this.fieldList.map((field, i) => (
          <FieldContainer key={i} onClick={handleItemClick}>
            <FieldTitle>{field.name}</FieldTitle>
            <FieldValue>{this.props[field.sysName]}</FieldValue>
          </FieldContainer>
        ))}
        {selected ? (
          <FieldContainer>
            {this.buttonList.map((button, i) => (
              <Button
                key={i}
                caption={button.caption}
                handleClick={button.onClick}
              />
            ))}
          </FieldContainer>
        ) : null}
      </ItemContainer>
    );
  }
}

export default Item;
