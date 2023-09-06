import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

import { Product } from "../../components/Product";
import {
  CatalogProps,
  ProductsCatalogContext,
} from "../../contexts/ProductsCatalog";

import imageMain from "../../assets/image-main.png";

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
        <div className="container px-4 lg:px-14 mx-auto">
          <div className="lg:grid grid-cols-9 py-10 md:py-24">
            <div className="col-span-5">
              <h1 className="text-4xl sm:text-5xl sm:leading-[62px] font-bold text-brown-700">
                Find the perfect coffee for any time of day
              </h1>

              <p className="text-xl mt-4 text-brown-500">
                With Coffee Delivery you get your coffee wherever you are, any
                time
              </p>

              <ul className="text-brown-300 grid sm:grid-cols-2 gap-5 mt-16">
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-yellow-700">
                    <ShoppingCart size={16} weight="fill" />
                  </span>
                  Simple and secure purchase
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-brown-300">
                    <Package size={16} weight="fill" />
                  </span>
                  Packaging keeps the coffee intact
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-yellow-500">
                    <Timer size={16} weight="fill" />
                  </span>
                  Fast and tracked delivery
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-purple-500">
                    <Coffee size={16} weight="fill" />
                  </span>
                  Coffee arrives fresh to you
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
            Our cafes
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
