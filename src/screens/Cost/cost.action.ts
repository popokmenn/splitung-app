import ICostTypes, {costTypes} from './cost.types';

const onClickMutation: ICostTypes.TOnMutationClick = payload => dispatch => {
  dispatch({type: costTypes.ON_MUTATION_CLICK, payload});
};
const setDataGrid: ICostTypes.TSetDataGrid = dataGrid => async dispatch => {
  dispatch({type: costTypes.SET_DATA_GRID, payload: dataGrid});
};
const setImageUri: ICostTypes.TSetImageURI = imageUri => async dispatch => {
  dispatch({type: costTypes.SET_URI, payload: imageUri});
};
const reset = () => async (dispatch: (arg0: {type: string}) => void) => {
  dispatch({type: costTypes.RESET});
};

export default {
  reset,
  setImageUri,
  setDataGrid,
  onClickMutation,
};
