import React from 'react';
import { CheckboxProps } from './Checkbox';

export const Checkbox = ({
    label,
    checked
  }:CheckboxProps) => {

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span> 
        <input type="checkbox" checked={checked} className="checkbox" />
      </label>
    </div>
  )
}