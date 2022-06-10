import { createStore } from 'redux';
import flipRoomReducer from './reducer/reducer';
import { Rooms } from './rooms';

let store = createStore(flipRoomReducer, Rooms)

export default store;