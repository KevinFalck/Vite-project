import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// Custom hook to encapsulate cart access and actions
// Provides a simplified API: cartCount, addToCart, removeFromCart
export default function useCart() {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART" });
  };

  return {
    cartCount: cart.cartCount,
    addToCart,
    removeFromCart,
  };
}
