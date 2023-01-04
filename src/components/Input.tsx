export function Input(props: any) {
  return (
    <input
      type="text"
      {...props}
      className="w-full p-3 bg-gray-300 border-[1px] border-gray-500 rounded-md placeholder:text-brown-200"
    />
  );
}
