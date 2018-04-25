import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';

import { combineEpics } from "redux-observable";


const get$ = (action$) => action$.filter(action => action.type !== 'NOOP').mapTo({ type: 'NOOP' });

export const albumsEpic = combineEpics(get$);
