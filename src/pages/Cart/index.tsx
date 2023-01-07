import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Input } from "../../components/Input";
import { Payment } from "../../components/Payment";
import { ProductCart } from "./components/ProductCart";

export function Cart() {
  return (
    <main className="bg-gray-100 min-h-[calc(100vh-104px)]">
      <section>
        <div className="container px-4 lg:px-14 mx-auto py-10">
          <div className="xl:grid grid-cols-9 gap-8">
            <div className="col-span-5">
              <h3 className="font-bold text-lg text-brown-500 mb-4">
                Complete seu pedido
              </h3>

              <div className="bg-gray-200 p-6 sm:p-10 rounded-md shadow-sm">
                <div className="flex gap-2 mb-8">
                  <MapPinLine size={20} className="text-yellow-700 mt-1" />
                  <div className="flex flex-col">
                    <span className="text-brown-500 font-semibold">
                      Endereço de Entrega
                    </span>
                    <span className="text-brown-300 text-sm">
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </div>
                </div>

                <form action="">
                  <div className="flex flex-col gap-4">
                    <div>
                      <Input placeholder="CEP" />
                    </div>

                    <div>
                      <Input placeholder="Rua" />
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      <div className="sm:col-span-2">
                        <Input placeholder="Número" />
                      </div>
                      <div className="col-span-2">
                        <Input placeholder="Complemento (opcional)" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input placeholder="Bairro" />
                      <div className="flex gap-3">
                        <Input placeholder="Cidade" />
                        <div className="w-36">
                          <Input placeholder="UF" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="bg-gray-200 p-6 sm:p-10 rounded-md mt-3 shadow-sm">
                <div className="flex gap-2 mb-8">
                  <CurrencyDollar size={20} className="mt-1 text-purple-400" />
                  <div className="flex flex-col">
                    <span className="text-brown-500 font-semibold">
                      Pagamento
                    </span>
                    <span className="text-brown-300 text-sm">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3">
                  <Payment type="CARTÃO DE CRÉDITO" />
                  <Payment type="CARTÃO DE DÉBITO" />
                  <Payment type="DINHEIRO" />
                </div>
              </div>
            </div>

            <div className="mt-10 xl:mt-0 col-span-4">
              <h3 className="font-bold text-lg text-brown-500 mb-4">
                Cafés selecionados
              </h3>

              <div className="bg-gray-200 p-6 sm:p-10 rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md shadow-sm">
                <ProductCart />
                <ProductCart />

                <div className="my-6">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-brown-300 text-sm font-bold">
                      Total de itens
                    </p>
                    <span className="text-brown-300">R$ 29,70</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 my-3">
                    <p className="text-brown-300 text-sm">Entrega</p>
                    <span className="text-brown-300">R$ 3,50</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-brown-500 text-xl font-bold">
                      Total
                    </strong>
                    <span className="text-brown-500 text-xl font-bold">
                      R$ 33,20
                    </span>
                  </div>
                </div>

                <NavLink
                  to="/summary"
                  title="Summary"
                  className="grid bg-yellow-500 text-white font-bold text-sm p-3 rounded-md text-center"
                >
                  CONFIRMAR PEDIDO
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
