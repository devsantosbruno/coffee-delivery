import { createContext, useState } from "react";

export const CartProducts = createContext({} as any);

export function CartProductProvider({ children }: any) {
  const [productsCart, setProductsCart] = useState([]);

  return (
    <CartProducts.Provider value={{ productsCart, setProductsCart }}>
      {children}
    </CartProducts.Provider>
  );
}
