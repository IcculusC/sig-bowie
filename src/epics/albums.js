import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { combineEpics } from "redux-observable";

import { albumsActions } from '../actions';


const get$ = (action$, _, { ajax }) =>
  action$.ofType(albumsActions.list.request.toString())
    .mergeMap(() =>
      ajax('/albums')
        .map(result => albumsActions.list.success(result))
        .catch(error => Observable.of(albumsActions.list.error(error)))
    );

export const albumsEpic = combineEpics(get$);
