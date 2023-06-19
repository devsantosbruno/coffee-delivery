interface InputProps {
  placeholder: string;
  setValueInput?: any;
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className="w-full p-3 bg-gray-300 focus:bg-gray-200 border-[1px] border-gray-500 rounded-md placeholder:text-brown-200 outline-0 text-brown-500"
      onChange={(value) => props.setValueInput(value.currentTarget.value)}
    />
  );
}
