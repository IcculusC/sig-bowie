import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import { albumsEpic } from './albums';


export const rootEpic = (...args) => combineEpics(albumsEpic)(...args, { ajax });
