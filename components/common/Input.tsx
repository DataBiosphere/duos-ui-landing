type InputProps = {
  id?: string;
  type?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
};

const Input = ({
  id,
  type,
  label,
  placeholder,
  value,
  required,
  minLength,
  onChange,
}: InputProps) => {
  const inputId = id ?? `input-${Math.floor(Math.random() * 1000)}`;
  const inputMinLength = minLength ?? 0;

  return (
    <div className='min-w-0 flex-1'>
      <label htmlFor='email' className='sr-only'>
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        minLength={inputMinLength}
        className='block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900'
      />
    </div>
  );
};

export default Input;
