import { albumsActions } from '../actions';
import { albumsReducer, initialState } from './albums';


const albumsResponse = {
  items: [{
    id: 1,
    name: 'foo',
    release_date: '1/11/2100',
    images: [{
      url: 'foo',
      width: 1,
      height: 1,
    }],
    external_urls: {
      spotify: 'foo',
    },
  }, {
    id: 2,
    name: 'bar',
    release_date: '2/11/2100',
    images: [{
      url: 'bar',
      width: 1,
      height: 1,
    }],
    external_urls: {
      spotify: 'bar',
    },
  }],
};

const albumsFiltered = [{
  id: 1,
  name: 'foo',
  releaseDate: '1/11/2100',
  images: [{
    url: 'foo',
    width: 1,
    height: 1,
  }],
  openUrl: 'foo',
},{
  id: 2,
  name: 'bar',
  releaseDate: '2/11/2100',
  images: [{
    url: 'bar',
    width: 1,
    height: 1,
  }],
  openUrl: 'bar',
}]

describe('albums reducer', () => {
  it('properly handles a list request action', () => {
    expect(albumsReducer(initialState(), albumsActions.list.request()))
      .toEqual({
        ...initialState(),
        fetching: true,
      });
  });

  it('properly handles a list request success action', () => {
    expect(albumsReducer(initialState(), albumsActions.list.success({ response: albumsResponse })))
      .toEqual({
        ...initialState(),
        fetching: false,
        list: albumsFiltered,
      });
  });

  it('properly handles a request failure', () => {
    const state = {
      ...initialState(),
      fetching: true,
      list: albumsFiltered,
    };

    const err = new Error('blah');

    expect(albumsReducer(state, albumsActions.list.failure(err)))
      .toEqual({ ...initialState(), error: err, })
  });
});
