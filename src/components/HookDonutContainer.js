import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyDonut } from "../redux";

function HookDonutContainer() {
  const numOfDonuts = useSelector((state) => state.donut.numOfDonuts);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>num of donut hook- {numOfDonuts}</h2>
      <button onClick={() => dispatch(buyDonut())}>buy Donut</button>
    </div>
  );
}

export default HookDonutContainer;
