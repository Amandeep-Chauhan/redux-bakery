import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
import { addIceCream } from "../redux";

function NewIceCreamContainer(props) {
  const { numOfIceCreams, buyIceCream, addIceCream } = props;
  const [number, setNumber] = useState();
  const [add, setAdd] = useState();
  return (
    <div>
      <h2>num of icecreams - {numOfIceCreams}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyIceCream(number)}>buy {number} iceCream</button>
      <input
        type="number"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      />
      <button onClick={() => addIceCream(add)}>add {add} IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (number) => dispatch(buyIceCream(number)),
    addIceCream: (add) => dispatch(addIceCream(add)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewIceCreamContainer);
