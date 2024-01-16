export enum InputFileSize {
  Small = "file-input-sm",
  Medium = "file-input-md",
  Large = "file-input-lg",
}

export enum InputFileColor {
  Primary = "file-input-primary",
  Secondary = "file-input-secondary",
  Success = "file-input-success",
  Warning = "file-input-warning",
  Info = "file-input-info",
  Error = "file-input-error",
  None = "",
}

export enum InputFileVariant {
  Bordered = "file-input-bordered",
  Ghost = "file-input-ghost",
}

export type InputFileProps = {
  size?: InputFileSize;
  color?: InputFileColor;
  variant?: InputFileVariant;
  onChange?: () => void;
  label?: string;
};