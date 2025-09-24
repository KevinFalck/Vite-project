export const initialState = {
  cartCount: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartCount: state.cartCount + 1 };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartCount: state.cartCount - 1 < 0 ? 0 : state.cartCount - 1,
      };
    default:
      return state;
  }
};
