import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { combineEpics } from "redux-observable";

import { albumsActions } from '../actions';
import { albumsCountSelector } from '../common';


const init$ = (action$, store) =>
  action$.ofType('persist/REHYDRATE') // fired once per page load by redux-persist, if there are no albums we'll dispatch the request action
    .mergeMap(() => {
      if (albumsCountSelector(store.getState()) > 0) { // could use a selector here, test for clarity
        return Observable.of({ type: 'NOOP' });
      }
      return Observable.of(albumsActions.list.request());
    });

const get$ = (action$, _, { ajax }) =>
  action$.ofType(albumsActions.list.request.toString())
    .mergeMap(() =>
      ajax('/albums') // custom albums endpoint served with express in react-dev-server - hacky
        .map(result => albumsActions.list.success(result)) // pass the raw result to action creator
        .catch(error => Observable.of(albumsActions.list.error(error)))
    );

export const albumsEpic = combineEpics(init$, get$);
