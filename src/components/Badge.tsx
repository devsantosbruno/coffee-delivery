interface TagNameProps {
  tagName: string;
}

export function Badge(props: TagNameProps) {
  return (
    <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-full font-bold text-[0.625rem] uppercase">
      {props.tagName}
    </span>
  );
}
