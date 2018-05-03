import { ActionsObservable } from 'redux-observable';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/toArray';

import { albumsEpic } from './albums';
import { albumsActions } from '../actions';
import { initialState } from '../reducers/albums';


const initAction$ = ActionsObservable.of({ type: 'persist/REHYDRATE' });
const getAction$ = ActionsObservable.of(albumsActions.list.request());

const store = (list = []) => ({ getState() { return { albums: Object.assign({}, initialState(), { list }) } } });


describe('albums epics', () => {
  it('requests a list on init if no albums are persisted', (done) => {
    albumsEpic(initAction$, store(), {})
      .subscribe((output) => {
        expect(output).toEqual(albumsActions.list.request());
        done();
      });
  });

  it('emits a NOOP on init if the albums are persisted in storage', (done) => {
    albumsEpic(initAction$, store([1,2,3]), {}) // the test for albums is on length
      .subscribe((output) => {
        expect(output).toEqual({ type: 'NOOP' });
        done();
      })
  });

  it('emits a list success action after a successful list request', (done) => {
    const ajax = () => Observable.of({
      response: {
        items: []
      }
    });
    albumsEpic(getAction$, store(), { ajax })
      .subscribe((output) => {
        expect(output).toEqual(albumsActions.list.success({ response: { items: [] } }));
        done();
      })
  });

  it('emits a list failure action after a failed list request', (done) => {
    const ajax = () => Observable.of({
      originalEvent: 'blah',
    });

    albumsEpic(getAction$, store(), { ajax })
      .subscribe((output) => {
        expect(output.type).toEqual(albumsActions.list.failure.toString());
        done();
      });
  });
});
