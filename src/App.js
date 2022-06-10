import Table from './components/table';
import { useState } from 'react';
import store from './store/store';
import { FLIP_ROOM, flipRoom } from './store/action/action'

let flip = (id, balance) => {
  store.dispatch(flipRoom(balance, id))
}

function App() {
  
  let [data, setData] = useState(store.getState())

  store.subscribe(() => setData(store.getState().sort( (a, b) => b.balance - a.balance)))
  
  return (
    <>
      <h1 onClick={e => flip(1, 200)} className='text-4xl font-bold my-4 mt-24 mx-8'>Move-Out List</h1>
      {data && (<Table  data={data} flip={flip} />)}
    </>
  );
}

export default App;