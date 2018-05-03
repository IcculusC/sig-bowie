import { handleActions } from 'redux-actions';

import { albumsActions } from '../actions';


export const initialState = () => ({
  fetching: false,
  list: [],
  error: undefined,
  limit: 10,
  offset: 0,
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
    }))
    .filter(item => state.list.find(item_ => item.id === item_.id) === undefined);
    
    return { ...state, fetching: false, list: [...state.list, ...filtered] };
  },
  [albumsActions.list.failure](state, action) {
    return { ...state, fetching: false, list: [], error: action.payload };
  },
  'PAGE/INCREASE_OFFSET'(state) {
    return { ...state, offset: state.offset + state.limit };
  }
}, initialState());
