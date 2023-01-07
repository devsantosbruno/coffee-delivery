import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { ProductsCatalogProvider } from "./contexts/ProductsCatalog";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsCatalogProvider>
      <App />
    </ProductsCatalogProvider>
  </React.StrictMode>
);
