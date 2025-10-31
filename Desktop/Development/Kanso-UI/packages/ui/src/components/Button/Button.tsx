import { forwardRef, type ButtonHTMLAttributes } from 'react';

import { cx } from '@kanso-ui/styles';

import { registerStyles } from '../../styles/registry';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
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
  transition:
    transform var(--k-motion-duration-fast, 150ms) var(--k-motion-easing-emphasized, ease),
    box-shadow var(--k-motion-duration-fast, 150ms) var(--k-motion-easing-emphasized, ease),
    background-color var(--k-motion-duration-fast, 150ms) ease,
    color var(--k-motion-duration-fast, 150ms) ease,
    border-color var(--k-motion-duration-fast, 150ms) ease;
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
  outline: 2px solid var(--k-color-semantic-focus-ring, #6366f1);
  outline-offset: 2px;
}

.kanso-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
}

.kanso-button[data-variant='solid'] {
  background: var(--k-color-semantic-primary, #4f46e5);
  color: var(--k-color-semantic-text-on-primary, #ffffff);
  border-color: transparent;
  box-shadow: var(--k-shadow-sm, none);
}

.kanso-button[data-variant='solid']:hover:not(:disabled) {
  background: var(--k-color-primary-500, #6366f1);
  box-shadow: var(--k-shadow-md, none);
  transform: translateY(-1px);
}

.kanso-button[data-variant='outline'] {
  background: var(--k-color-semantic-surface, #ffffff);
  color: var(--k-color-semantic-text-primary, #0f172a);
  border-color: var(--k-color-semantic-border, #e2e8f0);
  box-shadow: none;
}

.kanso-button[data-variant='outline']:hover:not(:disabled) {
  background: var(--k-color-semantic-surface-subtle, #f1f5f9);
  border-color: var(--k-color-primary-400, #818cf8);
}

.kanso-button[data-variant='ghost'] {
  background: transparent;
  color: var(--k-color-semantic-text-primary, #0f172a);
  border-color: transparent;
}

.kanso-button[data-variant='ghost']:hover:not(:disabled) {
  background: var(--k-color-semantic-surface-subtle, rgba(99, 102, 241, 0.08));
}
`;

registerStyles('button', styles);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      fullWidth = false,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth ? 'true' : undefined}
      className={cx('kanso-button', className)}
      {...props}
    />
  )
);

Button.displayName = 'Button';