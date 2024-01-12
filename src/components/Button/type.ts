export enum ButtonSize {
  Medium = "",
  Small = "btn-sm",
  Large = "btn-lg",
}

export enum ButtonVariant {
  Default = "",
  Ghost = "btn-ghost",
}

export enum ButtonColor {
  Primary = "btn-primary",
  Secondary = "btn-secondary",
  Delete = "btn-error",
}

export type ButtonProps = {
  isLoading?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  content: string;
  onClick?: () => void;
};
