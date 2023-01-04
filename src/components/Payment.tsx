import { Bank, CreditCard, Money } from "phosphor-react";

export function Payment(props: any) {
  return (
    <div className="bg-gray-400 py-4 px-5 rounded-md flex items-center gap-3">
      <CreditCard size={16} className="text-purple-400" />
      <Bank size={16} className="text-purple-400" />
      <Money size={16} className="text-purple-400" />
    </div>
  );
}
