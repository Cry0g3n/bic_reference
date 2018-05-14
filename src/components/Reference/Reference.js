import React, { PureComponent } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { connect } from "react-redux";

import Header from "../Header";
import EditorForm from "../EditorForm";
import {
  getFilterParams,
  getItems,
  getMode,
  getSelectedItem
} from "../../reducers/reference";
import {
  fetchDeleteItemRequest,
  fetchGetItemsRequest,
  setMode,
  setSelectedItem
} from "../../actions/reference";
import Item from "../Item";
import Search from "../Search";

const ReferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 600px;
  max-height: 600px;
`;

const ItemContainer = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const enhance = compose(
  connect(
    state => ({
      mode: getMode(state),
      items: getItems(state),
      selectedItem: getSelectedItem(state),
      filterParams: getFilterParams(state)
    }),
    { fetchGetItemsRequest, setSelectedItem, fetchDeleteItemRequest, setMode }
  )
);

class Reference extends PureComponent {
  componentDidMount() {
    const { fetchGetItemsRequest } = this.props;
    fetchGetItemsRequest();
  }

  handleItemClick = item => {
    this.props.setSelectedItem(item);
  };

  handleItemDelete = id => {
    this.props.fetchDeleteItemRequest(id);
  };

  handleItemEdit = () => {
    this.props.setMode("EDIT");
  };

  render() {
    const { mode, selectedItem, filterParams } = this.props;
    let { items } = this.props;
    if (filterParams && Object.values(filterParams).some(param => !!param)) {
      const keys = Object.keys(filterParams);
      items = items.filter(item => {
        let found = true;

        for (let key of keys) {
          if (
            !item[key].toLowerCase().includes(filterParams[key].toLowerCase())
          ) {
            found = false;
            break;
          }
        }

        return found;
      });
    }

    return (
      <ReferenceContainer>
        <Header />
        <Search />
        {mode === "ADD" || mode === "EDIT" ? <EditorForm /> : null}
        <ItemContainer>
          {items && items.length
            ? items.map(item => (
                <Item
                  key={item.id}
                  bic={item.bic}
                  bankName={item.bankName}
                  corAccount={item.corAccount}
                  bankAddress={item.bankAddress}
                  selected={selectedItem && item.id === selectedItem.id}
                  handleItemClick={this.handleItemClick.bind(null, item)}
                  handleItemDelete={this.handleItemDelete.bind(null, item.id)}
                  handleItemEdit={this.handleItemEdit.bind(null, item)}
                />
              ))
            : null}
        </ItemContainer>
      </ReferenceContainer>
    );
  }
}

export default enhance(Reference);
