import React from 'react';
import { increment,decrement } from '../reduxpro/Myactions';
import { useDispatch,useSelector } from 'react-redux';

function Myleptop() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
    <div>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <h1><span>{count}</span></h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  </div>
  )
}

export default Myleptop