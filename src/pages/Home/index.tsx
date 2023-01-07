import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useContext } from "react";

import imageMain from "../../assets/image-main.png";
import { Product } from "../../components/Product";
import {
  CatalogProps,
  ProductsCatalogContext,
} from "../../contexts/ProductsCatalog";

export function Home() {
  const { catalog } = useContext(ProductsCatalogContext);

  return (
    <main className="max-w-screen overflow-hidden bg-gray-100">
      <section className="bg-withColors bg-cover bg-bottom bg-no-repeat">
        <div className="container px-4 lg:px-14 mx-auto">
          <div className="grid grid-cols-9 py-24">
            <div className="col-span-5">
              <h1 className="text-5xl font-bold text-brown-700 leading-[62px]">
                Encontre o café perfeito para qualquer hora do dia
              </h1>

              <p className="text-xl mt-4 text-brown-500">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul className="text-brown-300 grid grid-cols-2 gap-5 mt-16">
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-yellow-700">
                    <ShoppingCart size={16} weight="fill" />
                  </span>
                  Compra simples e segura
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-brown-300">
                    <Package size={16} weight="fill" />
                  </span>
                  Embalagem mantém o café intacto
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-yellow-500">
                    <Timer size={16} weight="fill" />
                  </span>
                  Entrega rápida e rastreada
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-purple-500">
                    <Coffee size={16} weight="fill" />
                  </span>
                  O café chega fresquinho até você
                </li>
              </ul>
            </div>

            <div className="col-span-4">
              <img src={imageMain} alt="" className="ml-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-28">
        <div className="container px-4 lg:px-14 mx-auto">
          <h2 className="text-brown-500 text-3xl font-bold mb-14">
            Nossos cafés
          </h2>

          <div className="grid grid-cols-4 gap-x-8 gap-y-10">
            {catalog.map((product: CatalogProps) => (
              <Product
                key={product.name}
                image={product.imgSrc}
                tags={product.tags}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
