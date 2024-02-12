import clsx from 'clsx';
import React from 'react';
import { Controller } from 'react-hook-form';

import { CheckboxSize, CheckboxColor, CheckboxProps } from '../../types/Checkbox';

export const Checkbox: React.FC<CheckboxProps> = (
  ({
    name,
    control,
    required,
    size = CheckboxSize.Medium,
    color = CheckboxColor.Primary,
    textColor = CheckboxColor.Primary,
    label,
  }) => {
    return (
      <div className="form-control just">
        <Controller
          name={name}
          control={control}
          rules={{ required: required }}
          render={({ field }) => (
            <label className="label cursor-pointer justify-start gap-2">
            {label && (
              <span className={clsx(`${textColor}`)}>{label}</span> 
            )}
              <input type="checkbox"
                className={clsx(`${size} ${color} checkbox`)}
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                />
            </label>
          )}
        />
      </div>
    )
  }
);