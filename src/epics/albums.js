import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { combineEpics } from "redux-observable";

import { albumsActions } from '../actions';
import { albumsCountSelector, albumsPaginationSelector } from '../common';


export const init$ = (action$, store) =>
  action$.ofType('persist/REHYDRATE') // fired once per page load by redux-persist, if there are no albums we'll dispatch the request action
    .mergeMap(() => {
      if (albumsCountSelector(store.getState()) > 0) { // could use a selector here, test for clarity
        return Observable.of({ type: 'NOOP' });
      }
      return Observable.of(albumsActions.list.request());
    });

export const get$ = (action$, liteStore, { ajax }) =>
  action$.ofType(albumsActions.list.request.toString())
    .mergeMap(() => {
      const { limit, offset } = albumsPaginationSelector(liteStore.getState());

      return ajax(`/albums?limit=${limit}&offset=${offset}`) // custom albums endpoint served with express in react-dev-server - hacky
        .map(result => albumsActions.list.success(result)) // pass the raw result to action creator
        .catch(error => Observable.of(albumsActions.list.failure(error)))
    });

export const scroll$ = (action$) => {
  const bottom$ = action$.ofType('SCROLL')
    .filter(() => (document.body.scrollHeight - window.scrollY) === window.innerHeight)
    .mapTo(albumsActions.page.increaseOffset());

  const load$ = action$.ofType(albumsActions.page.increaseOffset.toString()).mapTo(albumsActions.list.request());

  return Observable.merge(bottom$, load$);
}

export const albumsEpic = combineEpics(init$, get$, scroll$);
