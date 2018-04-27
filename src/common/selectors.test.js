import {
  albumsReducerSelector,
  albumsSelector,
  albumsCountSelector
} from './selectors';

import { initialState } from '../reducers/albums';


const state = (list = []) => ({ albums: Object.assign({}, initialState(), { list }) });

describe('albums selectors', () => {
  it('selects the albums reducer from the state', () => {
    expect(albumsReducerSelector(state())).toEqual(initialState());
  });

  it('selects the album list from the state', () => {
    expect(albumsSelector(state())).toEqual([]);
  });

  it('gets the current album count from the state', () => {
    expect(albumsCountSelector(state([1,2,3]))).toEqual(3);
  });
})
