import { combineReducers } from "redux";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "CART":
      return [
        ...state.map(({ cart, ...other }) =>
          other.id === action.payload
            ? { ...other, cart: !cart }
            : { ...other, cart }
        ),
      ];
    case "LIKE":
      return [
        ...state.map(({ favorite, ...other }) =>
          other.id === action.payload
            ? { ...other, favorite: !favorite }
            : { ...other, favorite }
        ),
      ];
    case "create":
      // console.log(action.payload.products);
      return action.payload.map((data) => ({
        ...data,
        favorite: false,
        cart: false,
      }));
    default:
      return state;
  }
};

// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case "ADD":
//       let existing = state.filter((data) => data.id === action.payload.id);
//       if (existing.length > 0) {
//         return state.filter((data) => data.id !== action.payload.id);
//       }
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

const reducers = combineReducers({
  products: reducer,
});

export default reducers;
