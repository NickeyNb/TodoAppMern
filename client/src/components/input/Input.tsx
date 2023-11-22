import { Dispatch, SetStateAction } from "react";

type DataType = {
  a: string;
  b: string;
};
interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  title?: string;
  setTitle?: Dispatch<SetStateAction<string>>;
  // setTitle is a function which takes arg of type this
  description?: string;
  setDescription?: Dispatch<SetStateAction<string>>;
}
const Input = ({
  label,
  id,
  type,
  placeholder,
  title,
  setTitle,
  description,
  setDescription,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="" htmlFor={id}>
        {label.toLocaleUpperCase()}
      </label>
      <input
        id={id}
        autoComplete={id}
        onChange={(e) =>
          setTitle(e.target.value) as ChangeEventHandler<HTMLInputElement>
        }
        type={type}
        placeholder={placeholder}
        className="mb-4 mt-1 rounded-lg border border-solid border-blue-100 px-2 py-2 outline-none"
      />
    </div>
  );
};

export default Input;
