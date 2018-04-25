import { createActions } from 'redux-actions';


export const albumsActions = createActions({
  LIST: {
    REQUEST: undefined,
    SUCCESS: result => result.response.items,
    FAILURE: result => new Error(result.originalEvent),
  },
});
