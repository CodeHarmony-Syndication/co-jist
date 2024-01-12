export enum InputFieldSize {
  Medium = "",
  Small = "input-sm",
  Large = "input-lg",
}

export enum InputFieldVariant {
  Default = "",
  Ghost = "input-ghost",
}

export enum InputFieldColor {
  Primary = "input-primary",
  Secondary = "input-secondary",
  Succes = "input-success",
  Warning = "input-warning",
  Error = "input-error",
}

export type InputFieldProps = {
  size?: InputFieldSize;
  color?: InputFieldColor;
  variant?: InputFieldVariant;
  isDisabled?: boolean;
  onChange?: () => void;
  type?: string;
  placeholder?: string;
};