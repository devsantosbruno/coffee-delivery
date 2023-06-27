import { createContext, useState } from "react";

export const CartInfos = createContext({} as any);

export function CartInfosProvider({ children }: any) {
  const [infosCart, setInfosCart] = useState({});

  return (
    <CartInfos.Provider value={{ infosCart, setInfosCart }}>
      {children}
    </CartInfos.Provider>
  );
}
