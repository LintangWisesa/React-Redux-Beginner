import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, signin } from './actions'

function App() {
  
  const counter = useSelector(state => state.counter)
  const isLogin = useSelector(state => state.isLogin)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Tes React & Redux</h1>
      <h1>Counter: {counter}</h1>
      <h1>{isLogin ? 'You\'re logged in!' : 'You\'re NOT logged in!'}</h1>
      <button onClick={() => dispatch(increment())}>
        Tambah +
      </button>
      <button onClick={() => dispatch(decrement())}>
        Kurang -
      </button>
      <button onClick={() => dispatch(signin())}>
        {isLogin ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;
