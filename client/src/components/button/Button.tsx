interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}
const Button = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="mx-auto mt-2 w-full rounded-lg bg-blue-300 py-2 font-semibold hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-gray-300 "
    >
      {label}
    </button>
  );
};

export default Button;
