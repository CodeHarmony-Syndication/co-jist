export enum InputFieldSize {
  Small = "input-sm",
  Medium = "input-md",
  Large = "input-lg",
}

export enum InputFieldColor {
  Primary = "input-primary",
  Secondary = "input-secondary",
  Success = "input-success",
  Warning = "input-warning",
  Error = "input-error",
}

export enum InputFieldVariant {
  Bordered = "input-bordered",
  Ghost = "input-ghost",
}

export type InputFieldProps = {
  size?: InputFieldSize;
  color?: InputFieldColor;
  variant?: InputFieldVariant;
  isDisabled?: boolean;
  onChange?: () => void;
  type?: string;
  placeholder?: string;
  label?: string;
};