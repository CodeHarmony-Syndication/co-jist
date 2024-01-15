import clsx from 'clsx';
import React, { useState } from 'react';
import { CheckboxSize, CheckboxColor, CheckboxProps } from './Checkbox';

export const Checkbox = ({
    size = CheckboxSize.Medium,
    color = CheckboxColor.Primary,
    onChange,
    label,
    checked
  }:CheckboxProps) => {

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
        />
      </label>
    </div>
  )
}