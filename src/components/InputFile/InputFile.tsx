import clsx from 'clsx';
import React from 'react';
import { InputFileSize, InputFileColor, InputFileVariant, InputFileProps } from './InputFile';

export const InputFile = ({
    size = InputFileSize.Medium,
    color = InputFileColor.Primary,
    variant = InputFileVariant.Bordered,
    onChange,
    label
  }:InputFileProps) => {

  return (
    <label className="form-control w-full max-w-xs">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
        <input
          type="file"
          className={clsx(`${size} ${color} ${variant} file-input w-full max-w-xs`)}
          onChange={onChange}
        />
    </label>
  )
}