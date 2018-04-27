import { createSelector } from 'reselect';


export const albumsReducerSelector = state => state.albums;
export const albumsSelector = createSelector(albumsReducerSelector, albums => albums.list);
export const albumsCountSelector = createSelector(albumsSelector, list => list.length);
