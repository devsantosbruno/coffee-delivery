interface paymentProps {
  type: "CREDIT CARD" | "DEBIT CARD" | "MONEY";
  icon: any;
  selectPaymentOption: any;
  currentChoose: any;
}

export function Payment(props: paymentProps) {
  return (
    <button
      onClick={() => props.selectPaymentOption(props.type)}
      className={`py-4 px-5 rounded-md flex items-center gap-3 text-xs text-brown-300 font-semibold w-full max-w-[250px] border-[1px] ${
        props.currentChoose === props.type
          ? `border-purple-400 bg-purple-200`
          : `border-transparent bg-gray-400`
      }`}
    >
      {props.icon}

      {props.type}
    </button>
  );
}
