interface InputProps {
  placeholder: string;
  setInputValue?: any;
  value?: any;
  disabled?: any;
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      className={`w-full p-3 bg-gray-300 focus:bg-gray-200 border-[1px] border-gray-500 rounded-md placeholder:text-brown-200 text-brown-500 outline-0 ${
        props.disabled && `bg-gray-400 cursor-not-allowed`
      }`}
      placeholder={props.placeholder}
      onChange={(value) => props.setInputValue(value.currentTarget.value)}
      value={props.value}
      disabled={props.disabled}
      maxLength={props.placeholder === "CEP" ? 8 : undefined}
      // {...props}
    />
  );
}
