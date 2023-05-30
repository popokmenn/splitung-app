import {configureStore} from '@reduxjs/toolkit';
import {AnyAction, combineReducers, Store} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import logger from 'redux-logger';
import thunk, {ThunkDispatch} from 'redux-thunk';
import costReducer from 'screens/Cost/cost.reducer';

const reducers = combineReducers({
  cost: costReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: [thunk, logger],
});
export default store;

export type TStore = typeof store;
export type TGlobalState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<TGlobalState, unknown, AnyAction>;
export type AppStore = Omit<Store<TGlobalState, AnyAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch,
};
export const useAppSelector: TypedUseSelectorHook<TGlobalState> = useSelector;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
