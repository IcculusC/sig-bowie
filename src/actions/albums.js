import { createActions } from 'redux-actions';


export const albumsActions = createActions({
  LIST: {
    REQUEST: undefined, // identity function for payload (whatever you pass is the payload, we pass nothing)
    SUCCESS: result => result.response.items, // pluck the relevant data from raw action
    FAILURE: result => new Error(result.originalEvent), // create Error so redux-actions will create an FSA compliant error action
  },
  PAGE: {
    INCREASE_OFFSET: undefined, // increases the offset by the limit of 10, identity function for payload
  },
});
