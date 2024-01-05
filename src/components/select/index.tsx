import clsx from 'clsx'
import React from 'react'
import { UseFormRegister, FieldValues } from "react-hook-form"

import { SelectProps, SelectSize } from './types'

export const Select = React.forwardRef<
    HTMLSelectElement,
    SelectProps & ReturnType<UseFormRegister<FieldValues>>
>(({
    error,
    isDisabled,
    label, 
    name, 
    onBlur,
    onChange, 
    options, 
    size = SelectSize.Normal 
}, ref) => (
    <label className="form-control w-full max-w-xs">
        {label && (
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
        )}
        <select 
            className={clsx(`select select-bordered w-full max-w-xs ${size}`, {
                'select-error': error,
            })}
            disabled={isDisabled}
            name={name} 
            onChange={onChange} 
            onBlur={onBlur} 
            ref={ref} 
        >
            {options.map(({title, value}) => {
                return <option key={value} value={value}>{title}</option>
            })}
        </select>
        {error && (
            <div className="label">
                <span className="label-text-alt text-error">{error}</span>
            </div>
        )}
    </label>
))
