import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { CartProductProvider } from "./contexts/CartProducts";
import { ProductsCatalogProvider } from "./contexts/ProductsCatalog";
import { CartInfosProvider } from "./contexts/CartInfos";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsCatalogProvider>
      <CartProductProvider>
        <CartInfosProvider>
          <App />
        </CartInfosProvider>
      </CartProductProvider>
    </ProductsCatalogProvider>
  </React.StrictMode>
);
