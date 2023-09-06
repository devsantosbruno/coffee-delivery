import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ProductsCatalogProviderProps {
  children: ReactNode;
}

export interface CatalogProps {
  name: string;
  tags: string[];
  price: number;
  imgSrc: string;
  description: string;
}

interface CatalogDataProps {
  catalog: CatalogProps[];
}

export const ProductsCatalogContext = createContext({} as CatalogDataProps);

export function ProductsCatalogProvider({
  children,
}: ProductsCatalogProviderProps) {
  const [catalog, setCatalog] = useState<CatalogProps[]>([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/afd5af4d80ab75884094")
      .then((response) => setCatalog(response.data));
  }, []);

  return (
    <ProductsCatalogContext.Provider value={{ catalog }}>
      {children}
    </ProductsCatalogContext.Provider>
  );
}
