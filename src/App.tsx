import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {increaseCounter} from "./redux/reducers/form";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.form.counter);

  return (
    <div className="App">
      Current count is {count}
      <button onClick={() => dispatch(increaseCounter())}>Click me</button>
    </div>
  );
}

export default App;
