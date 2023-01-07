import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ProductsCatalogProviderProps {
  children: ReactNode;
}

interface catalogProps {
  name: string;
  tags: string[];
  price: number;
  imgSrc: string;
  description: string;
}

interface CatalogDataProps {
  catalog: catalogProps[];
}

export const ProductsCatalogContext = createContext({} as CatalogDataProps);

export function ProductsCatalogProvider({
  children,
}: ProductsCatalogProviderProps) {
  const [catalog, setCatalog]: any = useState<catalogProps[]>([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/a380939a53668d2393dd", {})
      .then((response) => setCatalog(response.data));
  }, []);

  return (
    <ProductsCatalogContext.Provider value={{ catalog }}>
      {children}
    </ProductsCatalogContext.Provider>
  );
}
