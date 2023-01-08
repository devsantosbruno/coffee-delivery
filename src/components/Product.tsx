import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

import { CartProducts } from "../contexts/CartProducts";

import { Badge } from "./Badge";

interface ProductProps {
  name: string;
  tags: string[];
  price: number;
  image: string;
  description: string;
}

export function Product(props: ProductProps) {
  const [quantity, setQuantity] = useState<number>(0);

  const { productsCart, setProductsCart } = useContext(CartProducts);

  // normalizing values
  let priceBR = props.price.toFixed(2).replace(".", ",");

  useEffect(() => {
    console.log(productsCart);
  }, [productsCart]);

  return (
    <div className="bg-gray-200 rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md px-6 py-5 text-center shadow-md">
      <img src={`${props.image}`} alt="" className="-mt-10 mx-auto mb-3" />

      <div className="flex flex-wrap justify-center gap-1">
        {props.tags.map((tagName: string) => (
          <Badge key={tagName} tagName={tagName} />
        ))}
      </div>

      <h3 className="text-brown-500 text-xl font-extrabold mb-2 mt-4">
        {props.name}
      </h3>
      <p className="text-brown-200 text-sm">{props.description}</p>

      <div className="flex items-center justify-between mt-8">
        <span className="text-lg text-brown-300">
          R$ <strong className="text-2xl">{priceBR}</strong>
        </span>

        <div className="flex gap-2">
          <div className="bg-gray-400 px-3 py-2 rounded-md flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setQuantity((prevState) =>
                  prevState > 0 ? prevState - 1 : prevState
                )
              }
              disabled={quantity <= 0}
              className="text-purple-400 hover:text-purple-800 transition duration-150"
            >
              <Minus size={16} weight="bold" />
            </button>
            <span className="text-brown-700">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prevState) => prevState + 1)}
              className="text-purple-400 hover:text-purple-800 transition duration-150"
            >
              <Plus size={18} weight="bold" />
            </button>
          </div>

          <button
            type="button"
            className="bg-purple-800 hover:bg-purple-400 transition duration-150 text-white w-9 h-9 flex items-center justify-center rounded-md"
            disabled={quantity <= 0 ? true : false}
            onClick={() =>
              setProductsCart([
                ...productsCart,
                {
                  image: props.image,
                  tags: props.tags,
                  name: props.name,
                  description: props.description,
                  price: props.price,
                  quantity: quantity,
                },
              ])
            }
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
