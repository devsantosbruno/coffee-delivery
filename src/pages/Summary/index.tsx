import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext, useEffect } from "react";
import { CartInfos } from "../../contexts/CartInfos";

import image from "../../assets/illustration.svg";
import { CartProducts } from "../../contexts/CartProducts";
import { useNavigate } from "react-router-dom";

export function Summary() {
  const { productsCart } = useContext(CartProducts);
  const { infosCart } = useContext(CartInfos);

  const navigate = useNavigate();

  useEffect(() => {
    if (productsCart.length < 1) {
      navigate("/");
    }
  }, [productsCart]);

  return (
    <main className="bg-gray-100 min-h-[calc(100vh-104px)]">
      <section className="h-full flex items-center">
        <div className="container px-4 lg:px-14 mx-auto py-10 md:py-20">
          <div className="md:grid grid-cols-2 items-end gap-8 w-full">
            <div className="mb-8 md:mb-0">
              <h1 className="text-yellow-700 font-extrabold text-4xl mb-1">
                Uhu! Pedido confirmado
              </h1>
              <p className="text-brown-500 text-xl">
                Agora é só aguardar que logo o café chegará até você
              </p>

              <div className="mt-10 bg-gradientBorder p-[2px] rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
                <div className="bg-gray-100 px-10 py-11 rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-400 rounded-full p-2">
                      <MapPin size={20} weight="fill" color="white" />
                    </span>

                    <span className="text-brown-300">
                      Entrega em{" "}
                      <strong>
                        {infosCart.address.street}, {infosCart.address.number} -{" "}
                        {infosCart.address?.complement}
                      </strong>
                      <br /> {infosCart.address.district} -{" "}
                      {infosCart.address.city}, {infosCart.address.UF}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 my-8">
                    <span className="bg-yellow-500 rounded-full p-2">
                      <Timer size={20} weight="fill" color="white" />
                    </span>

                    <span className="text-brown-300">
                      Previsão de entrega <br />
                      <strong>
                        {Math.floor(infosCart.deliveryPrice * 4)} min -{" "}
                        {Math.round(infosCart.deliveryPrice * 5)} min
                      </strong>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-700 rounded-full p-2">
                      <CurrencyDollar size={20} weight="fill" color="white" />
                    </span>

                    <span className="text-brown-300">
                      Pagamento na entrega <br />
                      <strong>{infosCart.paymentType}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <img src={image} alt="" className="mx-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}
