import React from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"

import { CheckboxSize, CheckboxColor } from '../types/Checkbox';

import { Checkbox } from '../components/Checkbox/Checkbox.tsx';

type TFormInput =  {
  agree: boolean,
}

export const ExampleForm: React.FC  = () => {
  const methods = useForm<TFormInput>({
    defaultValues: {
      agree: false,
    },
    mode: 'onSubmit',
  })
  const { handleSubmit, control, formState: { isValid } } = methods;

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    if (isValid) {
      console.log(data)
    }
  }
  
  return (
    <div className="card w-120 bg-neutral-content text-primary-content">
      <div className="card-body">
        <h2 className="card-title uppercase">Example form</h2>
        <p className="text-start">Page for testing components</p>
        <div className="card-actions justify-end">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Checkbox
                name="agree"
                size={CheckboxSize.Large}
                color={CheckboxColor.Primary}
                text-color="text-primary-content"
                label="I agree to the terms and conditions"
                control={control}
              />
              <button className="btn" type="submit">Send form</button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
