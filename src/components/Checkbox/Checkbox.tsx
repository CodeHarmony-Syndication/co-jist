import clsx from 'clsx';
import React, { useState } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import { CheckboxSize, CheckboxColor, CheckboxProps } from './Checkbox';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps & ReturnType<UseFormRegister<FieldValues>>>(
  ({
    size = CheckboxSize.Medium,
    color = CheckboxColor.Primary,
    onChange,
    label,
    checked
  }, ref) => {

    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (
    ) => {
      setIsChecked(prevState => !prevState);
    };

    return (
      <div className="form-control just">
        <label className="label cursor-pointer justify-start gap-2">
        {label && (
          <span className="label-text">{label}</span> 
        )}
          <input type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            className={clsx(`${size} ${color} checkbox`)}
            ref={ref}
          />
        </label>
      </div>
    )
  }
);