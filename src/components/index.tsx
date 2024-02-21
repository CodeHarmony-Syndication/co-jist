import clsx from 'clsx'
import React from 'react'
import { TextAreaProps, TextAreaSize ,TextAreaOption } from '../types/type.ts'

export const TextArea =({text, placeholder, size = TextAreaSize.Medium}) => {


    return(
    <form>
        <textarea id="textarea-title" placeholder="Napište text" className={clsx('textarea', size)}>{text}</textarea>
        <label htmlFor="textarea-title"></label>
    </form>
)
}
    
// Create a component for textarea element based on Daisy UI. Include props for different size and style of the textarea.

// It should have all the standard features like, disabled and error state.

// **Sizes**: small, medium, large

