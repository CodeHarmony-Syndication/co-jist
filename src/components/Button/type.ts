
export enum ButtonSize {
  Medium = '',
  Small = 'btn-sm',
  Large = 'btn-lg',
}

export enum ButtonVariant {
  Default = '',
  Ghost = 'btn-ghost',
  Disabled = 'btn-disabled',
}

export enum ButtonColor {
  Primary = 'btn-primary',
  Secondary = 'btn-secondary',
  Delete = 'btn-error', // ??
}

export type ButtonProps = {
  loadingState?: '', // ??
  size?: ButtonSize,
  color?: ButtonColor,
  variant?: ButtonVariant,
}
