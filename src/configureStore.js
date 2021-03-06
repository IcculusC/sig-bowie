import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createEpicMiddleware } from 'redux-observable';

import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import { rootEpic } from './epics';


const composer = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const epicMiddleware = createEpicMiddleware(rootEpic);

export const configureStore = () => {
  const store = createStore(persistedReducer, composer(applyMiddleware(epicMiddleware)));
  const persistor = persistStore(store);
  Observable.fromEvent(window, 'scroll')
    .subscribe(event => store.dispatch({ type: 'SCROLL' }));
  return { store, persistor };
}
