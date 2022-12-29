import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Badge } from "./Badge";

import coffee from "../assets/coffee-american.png";

export function Product() {
  const [quantity, setQuantity] = useState<number>(1);

  console.log(quantity);

  return (
    <div className="bg-gray-200 rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md px-6 py-5 text-center shadow-md">
      <img src={coffee} alt="" className="-mt-10 mx-auto mb-3" />

      <div className="flex flex-wrap justify-center gap-1">
        <Badge />
        <Badge />
      </div>

      <h3 className="text-brown-500 text-xl font-extrabold mb-2 mt-4">
        Expresso Tradicional
      </h3>
      <p className="text-brown-200 text-sm">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className="flex items-center justify-between mt-8">
        <span className="text-lg text-brown-300">
          R$ <strong className="text-2xl">9,90</strong>
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
              disabled={quantity <= 0 && true}
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
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
