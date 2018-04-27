import { albumsActions } from './albums';


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

describe('albums actions creators', () => {
  it('creates a properly formed list request action', () => {
    expect(albumsActions.list.request()).toEqual({ type: 'LIST/REQUEST' });
  })

  it('creates a properly formed list request success action', () => {
    expect(albumsActions.list.success({ response: albumsResponse }))
      .toEqual({
        type: 'LIST/SUCCESS',
        payload: albumsResponse.items,
      });
  });

  it('creates a properly formed list failure action', () => {
    const err = new Error('blah');
    expect(albumsActions.list.failure({ originalEvent: 'blah' }))
      .toEqual({
        type: 'LIST/FAILURE',
        error: true,
        payload: err,
      });
  });
});
