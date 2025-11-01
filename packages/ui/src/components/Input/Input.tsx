import {
  forwardRef,
  type InputHTMLAttributes,
  useId,
  type ReactNode
} from 'react';

import { cx } from '@kanso-ui/styles';

import { registerStyles } from '../../styles/registry';

export type InputValidationState = 'default' | 'success' | 'warning' | 'error';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  errorMessage?: string;
  validationState?: InputValidationState;
  hideLabel?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const styles = `
.kanso-field {
  display: flex;
  flex-direction: column;
  gap: var(--k-spacing-2, 0.5rem);
}

.kanso-field__label {
  font-size: var(--k-typography-sizes-sm, 0.875rem);
  font-weight: var(--k-typography-weights-medium, 500);
  color: var(--k-color-semantic-text-secondary, #475569);
}

.kanso-field__label[data-hidden='true'] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.kanso-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.kanso-input__field {
  width: 100%;
  padding: 0 var(--k-spacing-4, 1rem);
  min-height: 2.75rem;
  border-radius: var(--k-radius-md, 0.5rem);
  border: 1px solid var(--k-color-semantic-border, #e2e8f0);
  background: var(--k-color-semantic-surface, #ffffff);
  color: var(--k-color-semantic-text-primary, #0f172a);
  font-size: var(--k-typography-sizes-md, 1rem);
  transition:
    border-color var(--k-motion-duration-fast, 150ms) ease,
    box-shadow var(--k-motion-duration-fast, 150ms) ease,
    background-color var(--k-motion-duration-fast, 150ms) ease;
}

.kanso-input__field[data-has-start-icon='true'] {
  padding-left: calc(var(--k-spacing-4, 1rem) + 1.5rem);
}

.kanso-input__field[data-has-end-icon='true'] {
  padding-right: calc(var(--k-spacing-4, 1rem) + 1.5rem);
}

.kanso-input__field::placeholder {
  color: var(--k-color-semantic-text-secondary, #475569);
  opacity: 0.7;
}

.kanso-field[data-state='default'] .kanso-input__field:focus-visible {
  border-color: var(--k-color-semantic-focus-ring, #6366f1);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
  outline: none;
}

.kanso-field[data-state='success'] .kanso-input__field,
.kanso-field[data-state='success'] .kanso-input__field:focus-visible {
  border-color: var(--k-color-semantic-success, #22c55e);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
}

.kanso-field[data-state='warning'] .kanso-input__field,
.kanso-field[data-state='warning'] .kanso-input__field:focus-visible {
  border-color: var(--k-color-semantic-warning, #f59e0b);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
}

.kanso-field[data-state='error'] .kanso-input__field,
.kanso-field[data-state='error'] .kanso-input__field:focus-visible {
  border-color: var(--k-color-semantic-danger, #ef4444);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

.kanso-field__description {
  font-size: var(--k-typography-sizes-sm, 0.875rem);
  color: var(--k-color-semantic-text-secondary, #475569);
}

.kanso-field__message {
  font-size: var(--k-typography-sizes-sm, 0.875rem);
  color: var(--k-color-semantic-danger, #ef4444);
}

.kanso-field[data-state='success'] .kanso-field__message {
  color: var(--k-color-semantic-success, #22c55e);
}

.kanso-field[data-state='warning'] .kanso-field__message {
  color: var(--k-color-semantic-warning, #f59e0b);
}

.kanso-input__decorator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--k-color-semantic-text-secondary, #475569);
  pointer-events: none;
  font-size: 1rem;
}

.kanso-input__decorator--start {
  left: var(--k-spacing-4, 1rem);
}

.kanso-input__decorator--end {
  right: var(--k-spacing-4, 1rem);
}
`;

registerStyles('input', styles);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      description,
      errorMessage,
      validationState = 'default',
      hideLabel = false,
      type = 'text',
      className,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? `kanso-input-${generatedId}`;
    const descriptionId = description ? `${inputId}-description` : undefined;
    const messageId = errorMessage ? `${inputId}-message` : undefined;

    const describedBy = [descriptionId, messageId]
      .filter(Boolean)
      .join(' ')
      .trim();

    return (
      <div
        className={cx('kanso-field', className)}
        data-state={validationState}
      >
        {label ? (
          <label
            className="kanso-field__label"
            data-hidden={hideLabel ? 'true' : undefined}
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}

        <div className="kanso-input__wrapper">
          {startIcon ? (
            <span className="kanso-input__decorator kanso-input__decorator--start" aria-hidden="true">
              {startIcon}
            </span>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            type={type}
            className="kanso-input__field"
            aria-invalid={validationState === 'error' ? 'true' : undefined}
            aria-describedby={describedBy || undefined}
            data-has-start-icon={startIcon ? 'true' : undefined}
            data-has-end-icon={endIcon ? 'true' : undefined}
            {...props}
          />
          {endIcon ? (
            <span className="kanso-input__decorator kanso-input__decorator--end" aria-hidden="true">
              {endIcon}
            </span>
          ) : null}
        </div>

        {description ? (
          <p id={descriptionId} className="kanso-field__description">
            {description}
          </p>
        ) : null}

        {errorMessage ? (
          <p id={messageId} className="kanso-field__message">
            {errorMessage}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

