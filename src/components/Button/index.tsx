import React from 'react';
import clsx from 'clsx';
import { ButtonSize, ButtonVariant, ButtonColor, ButtonProps } from './type';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isDisabled,
      isLoading,
      color = ButtonColor.Primary,
      size = ButtonSize.Medium,
      variant = ButtonVariant.Default,
      content,
    },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx('btn', size, color, variant)}
      disabled={isDisabled}
    >
      {isLoading && <span className="loading loading-spinner"></span>}
      {content}
    </button>
  )
);


// ## Description

// Create a component for button element based on Daisy UI. Include props for different size and style of the button.

// It should have all the standard features like, disabled and loading state.

// Component should also use props from react-hook-form to

// **Sizes**: small, medium, large

// **Variant**: default, ghost

// **Color**: primary, secondary, delete
