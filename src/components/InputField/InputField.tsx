import clsx from 'clsx';
import { InputFieldSize, InputFieldVariant, InputFieldColor, InputFieldProps } from './InputField';

export const InputField = ({
  isDisabled,
  color = InputFieldColor.Primary,
  size = InputFieldSize.Medium,
  variant = InputFieldVariant.Default,
  onChange,
  type,
  placeholder
}: InputFieldProps) => (
  <input
    type={type}
    placeholder={placeholder}
    className={clsx(`${color} ${size} ${variant}`)}
    disabled={isDisabled}
    onChange={onChange}
  />
);