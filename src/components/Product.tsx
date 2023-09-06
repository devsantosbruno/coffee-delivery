import * as Toast from "@radix-ui/react-toast";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useRef, useState } from "react";

import { CartProducts } from "../contexts/CartProducts";

import { Badge } from "./Badge";

interface ProductProps {
  name: string;
  tags: string[];
  price: number;
  image: string;
  description: string;
  notificationCart?: any;
}

export function Product(props: ProductProps) {
  const { productsCart, setProductsCart } = useContext(CartProducts);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    productsCart.filter((product: any) => {
      if (product.name == props.name) {
        setQuantity(Number(product.quantity));
      }
    });
  }, []);

  function addToCartOrQuantity() {
    const productsCartHaveTheProduct = productsCart.filter((product: any) => {
      return product.name === props.name;
    });

    if (productsCartHaveTheProduct.length > 0) {
      const updateCartWithQuantityUpdate = productsCart.filter(
        (product: any) => {
          if (product.name === props.name) {
            return (product.quantity = quantity);
          }
        }
      );

      setProductsCart([...productsCart], updateCartWithQuantityUpdate);
    } else {
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
      ]);
    }
  }

  // toasts
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function oneWeekAway() {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
  }

  function prettyDate(date: any) {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(date);
  }

  return (
    <>
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
            $ <strong className="text-2xl">{props.price}</strong>
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

            <Toast.Provider swipeDirection="right" duration={5000}>
              <Toast.Root
                className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
                open={open}
                onOpenChange={setOpen}
              >
                <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                  {props.name}
                  <br />
                  Added to Cart
                </Toast.Title>
                <Toast.Description asChild>
                  <time
                    className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
                    dateTime={eventDateRef.current.toISOString()}
                  >
                    {prettyDate(eventDateRef.current)}
                  </time>
                </Toast.Description>
              </Toast.Root>

              <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />

              <button
                type="button"
                className="bg-purple-800 hover:bg-purple-400 transition duration-150 text-white w-9 h-9 flex items-center justify-center rounded-md"
                disabled={quantity <= 0 ? true : false}
                onClick={() => {
                  addToCartOrQuantity();

                  setOpen(false);
                  window.clearTimeout(timerRef.current);
                  timerRef.current = window.setTimeout(() => {
                    eventDateRef.current = oneWeekAway();
                    setOpen(true);
                  }, 100);
                }}
              >
                <ShoppingCart size={22} weight="fill" />
              </button>
            </Toast.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
