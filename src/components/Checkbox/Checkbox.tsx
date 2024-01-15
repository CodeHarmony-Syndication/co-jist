import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox';

export const Checkbox = ({
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
    <div className="form-control">
      <label className="label cursor-pointer">
      {label && (
        <span className="label-text">{label}</span> 
      )}
        <input type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="checkbox" />
      </label>
    </div>
  )
}