import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCashActionCreator, getCashActionCreator} from "../../redux/cash/action";

const Balance = () => {
  const cashState = useSelector(state => state.cashReducer.cash)
  const dispatch = useDispatch()
  return (
    <div>
      balance - {cashState}
      <button onClick={() => dispatch(addCashActionCreator(Number(prompt())))}>
        пополнить
      </button>
      <button onClick={() => dispatch(getCashActionCreator(Number(prompt())))}>
        снять
      </button>
    </div>
  )
}

export default Balance