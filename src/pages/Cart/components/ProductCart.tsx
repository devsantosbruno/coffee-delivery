import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

export function ProductCart(props: any) {
  const [quantity, setQuantity] = useState<number>(props.quantity);

  function handleRemoveProduct() {
    props.onRemoveProduct(props.name);
  }

  useEffect(() => {
    props.updateQuantityProduct(props.name, quantity);
  }, [quantity]);

  return (
    <div>
      <div className="flex justify-between gap-5 py-8 border-b-[1px] border-gray-400">
        <div className="flex flex-col sm:flex-row gap-5">
          <img src={props.image} alt="" className="max-w-[80px] max-h-[80px]" />

          <div className="flex flex-col justify-between">
            <h4 className="text-brown-500 font-semibold mb-2">{props.name}</h4>

            <div className="flex gap-2">
              <div className="bg-gray-400 px-3 py-2 rounded-md flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((prevState) =>
                      prevState > 1 ? prevState - 1 : prevState
                    )
                  }
                  disabled={quantity <= 1 && true}
                  className="text-purple-400 hover:text-purple-800 transition duration-150"
                >
                  <Minus size={14} weight="bold" />
                </button>
                <span className="text-brown-700">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((prevState) => prevState + 1)}
                  className="text-purple-400 hover:text-purple-800 transition duration-150"
                >
                  <Plus size={14} weight="bold" />
                </button>
              </div>

              <button
                type="button"
                className="bg-gray-400 text-brown-300 text-xs flex gap-1 items-center justify-center rounded-md px-2 py-2"
                onClick={() => handleRemoveProduct()}
              >
                <ShoppingCart
                  size={18}
                  weight="fill"
                  className="text-purple-400"
                />
                REMOVE
              </button>
            </div>
          </div>
        </div>

        <strong className="text-brown-300 font-bold">$ {props.price}</strong>
      </div>
    </div>
  );
}
