import React from 'react';
import clsx from 'clsx';
import { UseFormRegister, FieldValues } from "react-hook-form";
import { ButtonSize, ButtonVariant, ButtonColor, ButtonProps } from './type';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & ReturnType<UseFormRegister<FieldValues>>>(({
  loadingState,
  variant = ButtonVariant.Defaultefault,
  color = ButtonColor.Primary, 
  size = ButtonSize.Medium,
}, ref) => (
  <button
    ref={ref} 
    className={clsx('btn',  ${size}  ${color}  ${variant})}
  >
  </button>
));



// ## Description

// Create a component for button element based on Daisy UI. Include props for different size and style of the button.

// It should have all the standard features like, disabled and loading state.

// Component should also use props from react-hook-form to

// **Sizes**: small, medium, large

// **Variant**: default, ghost

// **Color**: primary, secondary, delete
