type Props = {
  color?: string; // Optional color prop to allow custom colors
};

export const ShareIcon = ({ color = "currentColor" }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M2.5 16.6667V3.33337L18.3333 10L2.5 16.6667ZM4.16667 14.1667L14.0417 10L4.16667 5.83337V8.75004L9.16667 10L4.16667 11.25V14.1667Z"
        fill={color}
      />
    </svg>
  );
};
