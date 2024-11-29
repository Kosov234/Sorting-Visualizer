type ButtonProps = {
  alghorithmHandler: () => void;
  text: string;
};

export const Button = ({ alghorithmHandler, text }: ButtonProps) => {
  return (
    <button
      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded"
      onClick={() => alghorithmHandler()}
    >
      <p className="text-base">{text}</p>
    </button>
  );
};
