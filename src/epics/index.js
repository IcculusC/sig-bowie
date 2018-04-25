import { combineEpics } from "redux-observable";
import { albumsEpic } from './albums';


export const rootEpic = combineEpics(albumsEpic);
