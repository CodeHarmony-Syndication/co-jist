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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  checked?: boolean;
};