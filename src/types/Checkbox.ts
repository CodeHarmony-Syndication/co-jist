import { Control, FieldErrors, FieldValue } from "react-hook-form";

export enum CheckboxSize {
  Small = "checkbox-sm",
  Medium = "checkbox-md",
  Large = "checkbox-lg",
}

export enum CheckboxColor {
  Primary = "input-primary",
  Secondary = "input-secondary",
  Success = "checkbox-success",
  Warning = "checkbox-warning",
  Info = "checkbox-info",
  Error = "checkbox-error",
  None = "",
}

export type CheckboxProps = {
  size?: CheckboxSize;
  color?: CheckboxColor;
  textColor?: CheckboxColor;
  label?: string;
  control: Control<FieldValue<any>>;
  errors?: FieldErrors;
  required?: boolean;
  name: string;
};