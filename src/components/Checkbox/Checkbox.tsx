import React from 'react';
import { CheckboxProps } from './Checkbox';

export const Checkbox = ({
  checked
  }:CheckboxProps) => {
  
  return (
    <input type="checkbox" checked={checked} className="checkbox" />
  )
}