import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Input } from "../../components/Input";
import { Payment } from "../../components/Payment";

export function Cart() {
  return (
    <main className="bg-gray-100">
      <section>
        <div className="container px-4 lg:px-14 mx-auto pt-10">
          <div className="grid grid-cols-9 gap-8">
            <div className="col-span-5">
              <h3 className="font-bold text-lg text-brown-500 mb-4">
                Complete seu pedido
              </h3>

              <div className="bg-gray-200 p-10 rounded-md">
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

                    <div className="d-grid grid-cols-1">
                      <Input placeholder="Rua" />
                    </div>

                    <div className="flex gap-3">
                      <Input placeholder="Número" />
                      <Input placeholder="Complemento (opcional)" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
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

              <div className="bg-gray-200 p-10 rounded-md mt-3">
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

                <div className="flex gap-3">
                  <Payment type="CARTÃO DE CRÉDITO" />
                  <Payment type="CARTÃO DE DÉBITO" />
                  <Payment type="DINHEIRO" />
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <h3 className="font-bold text-lg text-brown-500 mb-4">
                Cafés selecionados
              </h3>

              <div className="bg-gray-200 p-10 rounded-md">
                <div className="flex gap-2">
                  <MapPinLine size={20} className="text-yellow-700 mt-1" />
                  <div className="flex flex-col">
                    <span className="text-brown-500">Endereço de Entrega</span>
                    <span className="text-brown-300 text-sm">
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
