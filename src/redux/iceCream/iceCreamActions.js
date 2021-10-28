import { BUY_ICECREAM } from "./iceCreamTypes";
import { ADD_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};

export const addIceCream = (add = 1) => {
  return {
    type: ADD_ICECREAM,
    payload: add,
  };
};
