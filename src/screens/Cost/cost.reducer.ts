import {createReducer} from '@reduxjs/toolkit';
import ICostTypes, {costTypes} from './cost.types';

const initialState: ICostTypes.ICostState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  errorCode: 0,
  errorMessage: '',
  dataGrid: [],
  dataGridMultiselects: [],
  imageUri: '',
  dataUser: {
    id: '',
    email: '',
    phone: '',
    username: '',
    Transactions: []
  },
  dataItem: {
    id: '',
    item_name: '',
    price: 0,
    quantity: 0,
    user_id: '',
    user_name: '',
  },
};
const costReducer = createReducer(initialState, {
  [costTypes.RESET]: () => {
    return {
      ...initialState,
    };
  },
  [costTypes.SET_DATA_GRID]: (state, action) => {
    const {dataGrid} = action.payload;
    return {
      ...state,
      dataGrid,
      dataGridMultiselects: dataGrid,
      isLoading: false,
    };
  },
  [costTypes.ON_MUTATION_CLICK]: (state, action) => {
    const {dataItem, isSuccess} = action.payload;
    return {
      ...state,
      dataItem: dataItem ? dataItem : initialState.dataItem,
      isSuccess: isSuccess ? isSuccess : initialState.isSuccess,
    };
  },
  [costTypes.SET_URI]: (state, action) => {
    const {imageUri} = action.payload;
    return {
      ...state,
      imageUri: imageUri ? imageUri : initialState.imageUri,
    };
  },
});
export default costReducer;
