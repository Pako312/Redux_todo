import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from "../../redux/counter/types";
import {decrementCounterActionCreator, incrementCounterActionCreator} from "../../redux/counter/actions";
import {counterReducer} from "../../redux/counter/reducer";

const CounterApp = () => {
  const dispatch = useDispatch()
  const stateCounter = useSelector(state => state.counterReducer.counter)
  const cashState = useSelector(state => state.cashReducer.cash)

  const handleIncrementCounter = () => {
    dispatch(incrementCounterActionCreator())
  }

  const handleDecrementCounter = () => {
    dispatch(decrementCounterActionCreator())
  }

  return (
    <div>
      <button onClick={handleIncrementCounter}>
        +
      </button>
      {stateCounter}
      <button onClick={handleDecrementCounter}>
        -
      </button>
      ---------
      balance from balance component - {cashState}
    </div>
  )
}

export default CounterApp