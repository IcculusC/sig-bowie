import { combineReducers } from "redux";
import { albumsReducer } from './albums';


export const rootReducer = combineReducers({ albumsReducer });
