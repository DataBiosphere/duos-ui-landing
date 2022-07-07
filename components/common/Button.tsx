type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  formType?: 'submit' | 'reset' | 'button';
  buttonType?: 'primary' | 'secondary' | 'tertiary';
};

const Button = ({
  children,
  onClick,
  className,
  disabled,
  formType,
  buttonType,
  ...props
}: ButtonProps) => {
  const primaryClass =
    'block w-full rounded-md bg-gradient-to-r from-meadow-400 to-topaz-400 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900';
  const secondaryClass =
    'inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700';
  const buttonClass =
    buttonType === 'primary'
      ? primaryClass
      : buttonType === 'secondary'
      ? secondaryClass
      : primaryClass;
  return (
    <button
      type={formType ?? 'button'}
      onClick={onClick}
      className={`${buttonClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
