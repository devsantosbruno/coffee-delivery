export function AddToCartNotification(props: any) {
  return (
    <div className=" bg-white shadow-lg p-8 rounded-2xl">
      <h2 className="text-center">
        {props.product} Added <br /> to cart
      </h2>
    </div>
  );
}
