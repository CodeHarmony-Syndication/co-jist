export enum TextAreaSize {
    Medium = 'textarea-md',
    Small = 'textarea-sm',
    Large = 'textarea-lg',
}

export type TextAreaProps = {
    autocomplete?: boolean;
    cols?:number;
    rows?:number;
    isDisabled?: boolean;
    form:string;
    label: string;
    maxlength?:number;
    name?:string;
    placeholder:string;
    isReadonly?: boolean;
    isRequired?:boolean;
    size?: TextAreaSize;
    error?: string;
    onSubmit: ()=> void;
    text: string;
}

export type TextAreaOption = {
    icon?: React.ReactNode;
    title: string;
    value: string | number;
}

