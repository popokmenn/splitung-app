import {ItemType, ValueType} from 'react-native-dropdown-picker';
import GlobalTypes from '../../../global-types';

declare namespace ICostTypes {
  interface ICostItem {
    id: string
    item_name: string
    quantity: number
    price: number
    user_id: string
    user_name: string
  }
  interface ITransactionItem {
    id: string
    transaction_name: string
    location: string
    description: string
    Items: ICostItem[]
  }
  interface IUserItem {
    id: string
    username: string
    email: string
    phone: string
    Transactions: ITransactionItem[]
  }
  interface ICostState extends GlobalTypes.IGlobalInitialState {
    dataGrid: ICostItem[]
    dataUser: IUserItem
    dataGridMultiselects: ICostItem[]
    dataItem: ICostItem
    isLoading: boolean
    isSuccess?: boolean
    imageUri: string
  }

  type TOnMutationClickArg = {
    dataItem?: ICostItem
    isSuccess?: boolean
  }
  type TOnMutationClick = GlobalTypes.TAction<
    TOnMutationClickArg,
    TOnMutationClickArg
  >
  type TSetDataGridArg = {
    dataGrid: ICostItem[]
  }
  type TSetDataGrid = GlobalTypes.TAction<
    TSetDataGridArg,
    TSetDataGridArg
  >
  type TSetImageURIArg = {
    imageUri: string
  }
  type TSetImageURI = GlobalTypes.TAction<
    TSetImageURIArg,
    TSetImageURIArg
  >
}
export default ICostTypes;

export const costTypes = {
  RESET: 'COST TYPES RESET STATE',
  SET_DATA_GRID: 'COST TYPES GET DATA GRID',
  ON_CHANGE: 'COST TYPES ON CHANGE',
  ON_PAGE_CHANGE: 'COST TYPES ON PAGE CHANGE',
  ON_FILTER_CHANGE: 'COST TYPES ON FILTER CHANGE',
  ON_SORT_CHANGE: 'COST TYPES ON SORT CHANGE',
  ON_MUTATION_CLICK: 'COST TYPES ON MUTATION',
  ON_SAVE_DATAITEM: 'COST TYPES ON SAVE DATAITEM',
  ON_DELETE: 'COST TYPES ON DELETE',
  SET_ERROR: 'COST TYPES SET ERROR',
  GET_DETAIL: 'COST TYPES GET DETAIL',
  SET_URI: 'COST TYPES SET URI',
};
