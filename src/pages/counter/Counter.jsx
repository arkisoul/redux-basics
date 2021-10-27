import { useSelector, useDispatch } from "react-redux";

import {incrementCounter, decrementCounter} from '../../store/actions/counter';

export const CounterComponent = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-component">
      <h1 style={{ fontSize: "4rem" }}>{counter.count}</h1>
      <div>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      </div>
    </div>
  );
};
