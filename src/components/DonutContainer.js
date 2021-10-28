import React from "react";
import { connect } from "react-redux";
import { buyDonut } from "../redux";

function DonutContainer(props) {
  const { numOfDonuts, buyDonut } = props;
  return (
    <div>
      <h2>num of donut- {numOfDonuts}</h2>
      <button onClick={buyDonut}>buy Donut</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfDonuts: state.donut.numOfDonuts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyDonut: () => dispatch(buyDonut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonutContainer);
