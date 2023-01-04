import { Bank, CreditCard, Money } from "phosphor-react";

interface typePaymentProps {
  type: "CARTÃO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO";
}

export function Payment(props: typePaymentProps) {
  return (
    <button className="bg-gray-400 py-4 px-5 rounded-md flex items-center gap-3 text-xs text-brown-300 font-semibold w-full max-w-[250px]">
      {props.type === "CARTÃO DE CRÉDITO" && (
        <CreditCard size={18} className="text-purple-400" />
      )}
      {props.type === "CARTÃO DE DÉBITO" && (
        <Bank size={18} className="text-purple-400" />
      )}
      {props.type === "DINHEIRO" && (
        <Money size={18} className="text-purple-400" />
      )}

      {props.type}
    </button>
  );
}
