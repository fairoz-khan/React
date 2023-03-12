import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState, counterSlice } from './Redux/CounterReducer';

function App() {
  const { increment, decrement, setFirstName, setLastName } = counterSlice.actions
  const currentState = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Rendered...");
  });
  return (
    <div>
      <h1>Counter: {currentState.value}</h1>
      <input type="text" placeholder='First Name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setFirstName(e.target.value))} />
      <input type="text" placeholder='Last Name' onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setLastName(e.target.value))} />
      <h1>First name : {currentState.firstName}</h1>
      <h1>Last name : {currentState.lastName}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
