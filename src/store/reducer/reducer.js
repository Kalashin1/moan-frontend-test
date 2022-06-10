import { FLIP_ROOM, flipRoom } from '../action/action';

let flipRoomReducer = (state, action) => {
  switch (action.type) {
    case FLIP_ROOM:
      console.log(state)
      const room = state.find(r => r.id == action.id);
      console.log(room)
      room.balance = action.balance * 2;
      const filteredRoom = state.filter(r => r.id !== room.id );
      console.log(filteredRoom)
      state = [...filteredRoom, room]
      break;
  }
  return state;
}

export default flipRoomReducer;