import clsx from 'clsx';
import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import { InputFieldSize, InputFieldColor, InputFieldVariant, InputFieldProps } from './InputField';

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps & ReturnType<UseFormRegister<FieldValues>>>(
  ({
    size = InputFieldSize.Medium,
    color = InputFieldColor.Primary,
    variant = InputFieldVariant.Bordered,
    onChange,
    type,
    placeholder,
    isDisabled,
    label
  }, ref) => {

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      console.log(event.target.value);
    };

    return (
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
          onChange={handleChange}
          ref={ref}
        />
      </label>
    );
  }
);