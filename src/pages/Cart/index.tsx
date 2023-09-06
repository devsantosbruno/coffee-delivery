import axios from "axios";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartProducts } from "../../contexts/CartProducts";

import { Input } from "../../components/Input";
import { Payment } from "../../components/Payment";
import { ProductCart } from "./components/ProductCart";
import { CartInfos } from "../../contexts/CartInfos";

export function Cart() {
  const { productsCart, setProductsCart } = useContext(CartProducts);
  const { setInfosCart } = useContext(CartInfos);
  const navigate = useNavigate();

  const [deliveryValue, setDeliveryValue] = useState(0);

  useEffect(() => {
    if (productsCart.length < 1) {
      navigate("/");
    }
  }, [productsCart]);

  useEffect(() => {
    setDeliveryValue(Math.random() * 10 + 3);
  }, []);

  const arrayValues = productsCart.map((product: any) => {
    return parseFloat(product.price) * product.quantity;
  });

  const totalCalculate = arrayValues.reduce(function (
    accumulator: number,
    value: number
  ) {
    return accumulator + value;
  },
  0);

  function removeProduct(productToDelete: any) {
    const updateCartWithRemove = productsCart.filter((product: any) => {
      return product.name !== productToDelete;
    });

    setProductsCart(updateCartWithRemove);
  }

  function updateQuantityProduct(nameProductUpdate: any, quantityProduct: any) {
    const updateCartWithQuantityUpdate = productsCart.filter((product: any) => {
      if (product.name === nameProductUpdate) {
        return (product.quantity = quantityProduct);
      }
    });

    setProductsCart([...productsCart], updateCartWithQuantityUpdate);
  }

  const [optionPaymentChosen, setPaymentOptionChosen] = useState("");
  const [cepValue, setCepValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [complementValue, setComplementValue] = useState("");
  const [addressData, setAddressData] = useState({
    bairro: "",
    cep: "",
    complemento: "",
    ddd: "",
    gia: "",
    ibge: "",
    localidade: "",
    logradouro: "",
    siafi: "",
    uf: "",
  });

  const completeValues =
    optionPaymentChosen.length > 0 &&
    cepValue.replace("-", "").length === 8 &&
    numberValue.length > 0;

  useEffect(() => {
    if (cepValue.replace("-", "").length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then((response) => setAddressData(response.data));
    } else {
      setAddressData({
        bairro: "",
        cep: "",
        complemento: "",
        ddd: "",
        gia: "",
        ibge: "",
        localidade: "",
        logradouro: "",
        siafi: "",
        uf: "",
      });
    }
  }, [cepValue]);

  function selectPaymentOption(valueReceivedForPaymentComponent: string) {
    setPaymentOptionChosen(valueReceivedForPaymentComponent);
  }

  async function createSummaryInfos() {
    await setInfosCart({
      address: {
        street: addressData.logradouro,
        number: numberValue,
        complement: complementValue,
        district: addressData.bairro,
        city: addressData.localidade,
        UF: addressData.uf,
      },
      paymentType: optionPaymentChosen,
      deliveryPrice: deliveryValue,
    });

    navigate("/summary");
  }

  return (
    <main className="bg-gray-100 min-h-[calc(100vh-104px)]">
      <section>
        <div className="container px-4 lg:px-14 mx-auto py-10">
          <div className="xl:grid grid-cols-9 gap-8">
            <div className="col-span-5">
              <h3 className="font-bold text-lg text-brown-500 mb-4">
                Fill your order
              </h3>

              <div className="bg-gray-200 p-6 sm:p-10 rounded-md shadow-sm">
                <div className="flex gap-2 mb-8">
                  <MapPinLine size={20} className="text-yellow-700 mt-1" />

                  <div className="flex flex-col">
                    <span className="text-brown-500 font-semibold">
                      Delivery Address
                    </span>
                    <span className="text-brown-300 text-sm">
                      Enter the address where you want to receive your order
                    </span>
                  </div>
                </div>

                <form action="">
                  <div className="flex flex-col gap-4">
                    <div>
                      <Input
                        placeholder="Zip Code"
                        setInputValue={setCepValue}
                      />
                    </div>

                    <div>
                      <Input
                        placeholder="Street"
                        value={addressData.logradouro}
                        disabled
                      />
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      <div className="sm:col-span-2">
                        <Input
                          placeholder="Number"
                          setInputValue={setNumberValue}
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          placeholder="Complemento (opcional)"
                          setInputValue={setComplementValue}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input
                        placeholder="District"
                        value={addressData.bairro}
                        disabled
                      />
                      <div className="flex gap-3">
                        <Input
                          placeholder="City"
                          value={addressData.localidade}
                          disabled
                        />
                        <div className="w-36">
                          <Input
                            placeholder="State"
                            value={addressData.uf}
                            disabled
                          />
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
                      Payment
                    </span>
                    <span className="text-brown-300 text-sm">
                      Payment is made on delivery. Choose the way you want to
                      pay
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3">
                  <Payment
                    type="CREDIT CARD"
                    icon={<CreditCard size={18} className="text-purple-400" />}
                    selectPaymentOption={selectPaymentOption}
                    currentChoose={optionPaymentChosen}
                  />
                  <Payment
                    type="DEBIT CARD"
                    icon={<Bank size={18} className="text-purple-400" />}
                    selectPaymentOption={selectPaymentOption}
                    currentChoose={optionPaymentChosen}
                  />
                  <Payment
                    type="MONEY"
                    icon={<Money size={18} className="text-purple-400" />}
                    selectPaymentOption={selectPaymentOption}
                    currentChoose={optionPaymentChosen}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 xl:mt-0 col-span-4">
              <h3 className="font-bold text-lg text-brown-500 mb-4">
                Coffee's selected
              </h3>

              <div className="bg-gray-200 px-6 pb-6 sm:px-10 sm:pb-10 rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md shadow-sm">
                {productsCart.map((product: any) => (
                  <ProductCart
                    key={product.name}
                    image={product.image}
                    tags={product.tags}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                    updateQuantityProduct={updateQuantityProduct}
                    onRemoveProduct={removeProduct}
                  />
                ))}

                <div className="my-6">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-brown-300 text-sm font-bold">
                      Items Total
                    </p>
                    <span className="text-brown-300">
                      $ {totalCalculate.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 my-3">
                    <p className="text-brown-300 text-sm">Delivery</p>
                    <span className="text-brown-300">
                      $ {deliveryValue.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <strong className="text-brown-500 text-xl">Total</strong>
                    <strong className="text-brown-500 text-xl">
                      $ {(totalCalculate + deliveryValue).toFixed(2)}
                    </strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={createSummaryInfos}
                  className={`w-full bg-yellow-500 text-white font-bold text-sm p-3 rounded-md text-center ${
                    !completeValues && `opacity-25 cursor-not-allowed`
                  }`}
                >
                  ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
