import { handleActions } from 'redux-actions';

import { albumsActions } from '../actions';


const initialState = () => ({
  fetching: false,
  list: [],
})

export const albumsReducer = handleActions({
  [albumsActions.list.request](state) {
    return { ...state, fetching: true };
  },
  [albumsActions.list.success](state, action) {
    return { ...state, fetching: false, list: action.payload };
  },
  [albumsActions.list.failure](state) {
    return { ...state, fetching: false, list: [] };
  },
}, initialState());
