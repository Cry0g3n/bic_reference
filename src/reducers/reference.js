import { handleActions } from "redux-actions";

import {
  fetchDeleteItemFailure,
  fetchDeleteItemRequest,
  fetchDeleteItemSuccess,
  fetchEditItemFailure,
  fetchEditItemRequest,
  fetchEditItemSuccess,
  fetchGetItemsFailure,
  fetchGetItemsRequest,
  fetchGetItemsSuccess,
  setFilterParams,
  setMode,
  setSelectedItem
} from "../actions/reference";

const initialState = {
  mode: "BROWSE",
  loading: false,
  items: [],
  selectedItem: null,
  filterParams: null
};

export default handleActions(
  {
    [setMode]: (state, action) => ({
      ...state,
      mode: action.payload
    }),
    [setSelectedItem]: (state, action) => ({
      ...state,
      selectedItem: action.payload
    }),
    [fetchGetItemsRequest]: (state, action) => ({
      ...state,
      loading: true,
      items: []
    }),
    [fetchGetItemsSuccess]: (state, action) => ({
      ...state,
      loading: false,
      items: action.payload.data,
      selectedItem: null
    }),
    [fetchGetItemsFailure]: (state, action) => ({
      ...state,
      loading: false,
      items: []
    }),
    [fetchDeleteItemRequest]: (state, action) => ({
      ...state,
      loading: true
    }),
    [fetchDeleteItemSuccess]: (state, action) => ({
      ...state,
      loading: false,
      selectedItem: null
    }),
    [fetchDeleteItemFailure]: (state, action) => ({
      ...state,
      loading: false
    }),
    [fetchEditItemRequest]: (state, action) => ({
      ...state,
      loading: true
    }),
    [fetchEditItemSuccess]: (state, action) => ({
      ...state,
      loading: false
    }),
    [fetchEditItemFailure]: (state, action) => ({
      ...state,
      loading: false
    }),
    [setFilterParams]: (state, action) => ({
      ...state,
      filterParams: { ...state.filterParams, ...action.payload }
    })
  },
  initialState
);

export const getMode = state => state.reference.mode;
export const isLoading = state => state.reference.loading;
export const getItems = state => state.reference.items;
export const getSelectedItem = state => state.reference.selectedItem;
export const getFilterParams = state => state.reference.filterParams;
