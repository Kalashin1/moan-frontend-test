let FLIP_ROOM = "FLIP_ROOM";

let flipRoom = (balance, id) => {
  return {
    type: FLIP_ROOM,
    balance,
    id
  }
}

export { FLIP_ROOM, flipRoom }