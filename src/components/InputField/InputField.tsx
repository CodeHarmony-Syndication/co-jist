import clsx from 'clsx';
import { InputFieldSize, InputFieldColor, InputFieldVariant, InputFieldProps } from './InputField';

export const InputField = ({
  isDisabled,
  size = InputFieldSize.Medium,
  color = InputFieldColor.Primary,
  variant = InputFieldVariant.Bordered,
  onChange,
  type,
  placeholder,
  labelText
}: InputFieldProps) => (
  <label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">{labelText}</span>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(`${size} ${color} ${variant}`)}
      disabled={isDisabled}
      onChange={onChange}
    />
  </label>
);