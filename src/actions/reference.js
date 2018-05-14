import { createActions } from "redux-actions";

export const {
  setMode,
  setSelectedItem,
  fetchAddItemRequest,
  fetchAddItemSuccess,
  fetchAddItemFailure,
  fetchGetItemsRequest,
  fetchGetItemsSuccess,
  fetchGetItemsFailure,
  fetchDeleteItemRequest,
  fetchDeleteItemSuccess,
  fetchDeleteItemFailure,
  fetchEditItemRequest,
  fetchEditItemSuccess,
  fetchEditItemFailure,
  setFilterParams
} = createActions({
  SET_MODE: undefined,
  SET_SELECTED_ITEM: undefined,
  FETCH_ADD_ITEM_REQUEST: undefined,
  FETCH_ADD_ITEM_SUCCESS: undefined,
  FETCH_ADD_ITEM_FAILURE: undefined,
  FETCH_GET_ITEMS_REQUEST: undefined,
  FETCH_GET_ITEMS_SUCCESS: undefined,
  FETCH_GET_ITEMS_FAILURE: undefined,
  FETCH_DELETE_ITEM_REQUEST: undefined,
  FETCH_DELETE_ITEM_SUCCESS: undefined,
  FETCH_DELETE_ITEM_FAILURE: undefined,
  FETCH_EDIT_ITEM_REQUEST: undefined,
  FETCH_EDIT_ITEM_SUCCESS: undefined,
  FETCH_EDIT_ITEM_FAILURE: undefined,
  SET_FILTER_PARAMS: undefined
});
