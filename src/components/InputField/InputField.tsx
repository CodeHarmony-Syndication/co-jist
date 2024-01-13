import clsx from 'clsx';
import { InputFieldSize, InputFieldColor, InputFieldVariant, InputFieldProps } from './InputField';

export const InputField = ({
  size = InputFieldSize.Medium,
  color = InputFieldColor.Primary,
  variant = InputFieldVariant.Bordered,
  onChange,
  type,
  placeholder,
  isDisabled,
  label
}: InputFieldProps) => (
  <label className="form-control w-full max-w-xs">
    {label && (
    <div className="label">
      <span className="label-text">{label}</span>
    </div>
    )}
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(`${size} ${color} ${variant} input px-2 h-10`)}
      disabled={isDisabled}
      onChange={onChange}
    />
  </label>
);