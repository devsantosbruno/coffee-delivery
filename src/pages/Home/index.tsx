import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

import { Product } from "../../components/Product";
import {
  CatalogProps,
  ProductsCatalogContext,
} from "../../contexts/ProductsCatalog";

import imageMain from "../../assets/image-main.png";
import { AddToCartNotification } from "./components/AddToCartNotification";

export function Home() {
  const { catalog } = useContext(ProductsCatalogContext);

  const [cartNotifications, setCartNotifications]: any = useState([]);

  function productCartNotification(productNotificationName: string) {
    setCartNotifications((prevState: any) => [
      ...prevState,
      productNotificationName,
    ]);
  }

  useEffect(() => {
    if (cartNotifications > 0) {
      setInterval(() => {
        setCartNotifications(cartNotifications.shift());
      }, 2000);
    }
  }, [cartNotifications]);

  return (
    <main className="max-w-screen overflow-hidden bg-gray-100">
      <section className="bg-withColors bg-cover bg-bottom bg-no-repeat relative">
        <div className="fixed right-5 mt-5 z-50">
          <div className="flex flex-col gap-2">
            {cartNotifications.map((notification: any) => (
              <AddToCartNotification
                key={notification}
                product={notification}
              />
            ))}
          </div>
        </div>

        <div className="container px-4 lg:px-14 mx-auto">
          <div className="lg:grid grid-cols-9 py-10 md:py-24">
            <div className="col-span-5">
              <h1 className="text-4xl sm:text-5xl sm:leading-[62px] font-bold text-brown-700">
                Encontre o café perfeito para qualquer hora do dia
              </h1>

              <p className="text-xl mt-4 text-brown-500">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <ul className="text-brown-300 grid sm:grid-cols-2 gap-5 mt-16">
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

            <div className="col-span-4 mt-10 lg:mt-0">
              <img src={imageMain} alt="" className="mx-auto lg:ml-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-28">
        <div className="container px-4 lg:px-14 mx-auto">
          <h2 className="text-brown-500 text-3xl font-bold mb-14 text-center sm:text-left">
            Nossos cafés
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-10">
            {catalog.map((product: CatalogProps) => (
              <Product
                key={product.name}
                image={product.imgSrc}
                tags={product.tags}
                name={product.name}
                description={product.description}
                price={product.price}
                notificationCart={productCartNotification}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
