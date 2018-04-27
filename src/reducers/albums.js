import { handleActions } from 'redux-actions';

import { albumsActions } from '../actions';


export const initialState = () => ({
  fetching: false,
  list: [],
  error: undefined,
})

export const albumsReducer = handleActions({
  [albumsActions.list.request](state) {
    return { ...state, fetching: true };
  },
  [albumsActions.list.success](state, action) {
    const filtered = action.payload.map(({
      id,
      name,
      release_date: releaseDate,
      images,
      external_urls: { spotify: openUrl },
    }) => ({
      id,
      name,
      releaseDate,
      images,
      openUrl,
    }));
    
    return { ...state, fetching: false, list: filtered };
  },
  [albumsActions.list.failure](state, action) {
    return { ...state, fetching: false, list: [], error: action.payload };
  },
}, initialState());
