import { createContext, useContext, useState } from "react";

// Define the types of the cart item (for TypeScript support)
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  count: number;
};

// Create CartContext
const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem, count: number) => void;
} | null>(null);

// Custom hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider to manage the cart state
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart function
  const addToCart = (item: CartItem, count: number) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex >= 0) {
        // If the item exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].count += count;
        return updatedCart;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCart, { ...item, count }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
