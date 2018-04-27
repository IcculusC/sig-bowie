import { combineReducers } from "redux";
import { albumsReducer as albums } from './albums';


export const rootReducer = combineReducers({ albums });
