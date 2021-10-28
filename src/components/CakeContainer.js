import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
// import { buyCake } from "../redux/cakes/cakeActions";

function CakeContainer(props) {
  const { numOfCakes, buyCake } = props;
  return (
    <div>
      <h2>num of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>buy cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
