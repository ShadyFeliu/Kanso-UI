import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

import { cx } from '@kanso-ui/styles';

import { registerStyles } from '../../styles/registry';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const styles = `
.kanso-button {
  appearance: none;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--k-spacing-2, 0.5rem);
  font-family: var(--k-typography-font-family, inherit);
  font-weight: var(--k-typography-weights-medium, 500);
  line-height: 1;
  border-radius: var(--k-radius-md, 0.5rem);
  cursor: pointer;
  position: relative;
  min-width: 0;
  transition:
    transform var(--k-motion-duration-fast, 150ms) var(--k-motion-easing-emphasized, ease),
    box-shadow var(--k-motion-duration-fast, 150ms) var(--k-motion-easing-emphasized, ease),
    background-color var(--k-motion-duration-fast, 150ms) ease,
    color var(--k-motion-duration-fast, 150ms) ease,
    border-color var(--k-motion-duration-fast, 150ms) ease;
  transform: translateY(0) scale(1);
}

.kanso-button[data-full-width='true'] {
  width: 100%;
}

.kanso-button[data-size='sm'] {
  min-height: 2rem;
  padding: 0 var(--k-spacing-3, 0.75rem);
  font-size: var(--k-typography-sizes-sm, 0.875rem);
}

.kanso-button[data-size='md'] {
  min-height: 2.5rem;
  padding: 0 var(--k-spacing-4, 1rem);
  font-size: var(--k-typography-sizes-md, 1rem);
}

.kanso-button[data-size='lg'] {
  min-height: 3rem;
  padding: 0 var(--k-spacing-5, 1.25rem);
  font-size: var(--k-typography-sizes-lg, 1.125rem);
}

.kanso-button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--k-color-semantic-surface, #ffffff),
    0 0 0 4px var(--k-color-semantic-focus-ring, #6366f1);
}

.kanso-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
  transform: none;
}

.kanso-button[data-variant='solid'] {
  background: var(--k-color-semantic-primary, #4f46e5);
  color: var(--k-color-semantic-text-on-primary, #ffffff);
  border-color: transparent;
  box-shadow: var(--k-shadow-sm, none);
}

.kanso-button[data-variant='solid']:hover:not(:disabled) {
  background: var(--k-color-primary-400, #6366f1);
  box-shadow: var(--k-shadow-md, none);
  transform: translateY(-1px);
}

.kanso-button[data-variant='solid']:active:not(:disabled) {
  background: var(--k-color-primary-600, #3544c4);
  transform: translateY(0);
  box-shadow: var(--k-shadow-sm, none);
}

.kanso-button[data-variant='outline'] {
  background: var(--k-color-semantic-surface, #ffffff);
  color: var(--k-color-semantic-text-primary, #0f172a);
  border-color: var(--k-color-semantic-border, #e2e8f0);
  box-shadow: none;
}

.kanso-button[data-variant='outline']:hover:not(:disabled) {
  background: var(--k-color-semantic-surface-subtle, #f1f5f9);
  border-color: var(--k-color-primary-300, #728dff);
}

.kanso-button[data-variant='outline']:active:not(:disabled) {
  border-color: var(--k-color-primary-500, #4959e6);
  color: var(--k-color-primary-600, #3544c4);
}

.kanso-button[data-variant='ghost'] {
  background: transparent;
  color: var(--k-color-semantic-text-primary, #0f172a);
  border-color: transparent;
}

.kanso-button[data-variant='ghost']:hover:not(:disabled) {
  background: color-mix(in srgb, var(--k-color-semantic-primary, #4f46e5) 12%, transparent);
  color: var(--k-color-primary-600, #3544c4);
}

.kanso-button[data-variant='ghost']:active:not(:disabled) {
  background: color-mix(in srgb, var(--k-color-semantic-primary, #4f46e5) 18%, transparent);
}

.kanso-button[data-icon-only='true'] {
  padding-inline: var(--k-spacing-3, 0.75rem);
}

.kanso-button__label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--k-spacing-2, 0.5rem);
}

.kanso-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-size: 1em;
  line-height: 0;
}

.kanso-button__icon > svg {
  width: 1em;
  height: 1em;
}
`;

registerStyles('button', styles);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      fullWidth = false,
      startIcon,
      endIcon,
      className,
      type = 'button',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const iconOnly = !children && (startIcon || endIcon);

    return (
      <button
        ref={ref}
        type={type}
        data-variant={variant}
        data-size={size}
        data-full-width={fullWidth ? 'true' : undefined}
        data-icon-only={iconOnly ? 'true' : undefined}
        className={cx('kanso-button', className)}
        disabled={disabled}
        {...props}
      >
        {startIcon ? (
          <span className="kanso-button__icon kanso-button__icon--start" aria-hidden="true">
            {startIcon}
          </span>
        ) : null}
        {children ? <span className="kanso-button__label">{children}</span> : null}
        {endIcon ? (
          <span className="kanso-button__icon kanso-button__icon--end" aria-hidden="true">
            {endIcon}
          </span>
        ) : null}
      </button>
    );
  }
);

Button.displayName = 'Button';