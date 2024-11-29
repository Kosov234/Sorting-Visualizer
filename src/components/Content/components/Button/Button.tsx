type ButtonProps = {
  onClick: () => void;
  text: string;
};

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded"
      onClick={() => onClick()}
    >
      <p className="text-base">{text}</p>
    </button>
  );
};
