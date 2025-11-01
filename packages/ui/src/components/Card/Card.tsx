import {
  forwardRef,
  type CSSProperties,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode
} from 'react';

import { atoms, mergeAtoms, cx } from '@kanso-ui/styles';

import { registerStyles } from '../../styles/registry';

export type CardVariant = 'surface' | 'outline' | 'elevated' | 'interactive';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  hoverable?: boolean;
}

const styles = `
.kanso-card {
  position: relative;
  border-radius: var(--k-radius-lg, 0.75rem);
  background: var(--k-color-semantic-surface, #ffffff);
  color: var(--k-color-semantic-text-primary, #0f172a);
  border: 1px solid transparent;
  transition:
    box-shadow var(--k-motion-duration-fast, 150ms) ease,
    transform var(--k-motion-duration-fast, 150ms) ease,
    border-color var(--k-motion-duration-fast, 150ms) ease,
    background var(--k-motion-duration-fast, 150ms) ease;
}

.kanso-card[data-variant='outline'] {
  border: 1px solid var(--k-color-semantic-border, #e2e8f0);
}

.kanso-card[data-variant='elevated'] {
  box-shadow: var(--k-shadow-md, 0 4px 6px rgba(15, 23, 42, 0.12));
}

.kanso-card[data-hoverable='true'][data-variant='elevated']:hover {
  transform: translateY(-2px);
  box-shadow: var(--k-shadow-lg, 0 10px 15px rgba(15, 23, 42, 0.22));
}

.kanso-card[data-variant='surface'] {
  border: 1px solid rgba(15, 23, 42, 0.04);
}

.kanso-card[data-variant='interactive'] {
  border: 1px solid color-mix(in srgb, var(--k-color-primary-200, #c9cfdd) 40%, transparent);
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--k-color-primary-25, #eff1ff) 60%, transparent) 0%,
    rgba(255, 255, 255, 0.92) 100%
  );
  box-shadow: var(--k-shadow-sm, 0 1px 3px rgba(15, 23, 42, 0.1));
  backdrop-filter: blur(18px);
}

.kanso-card[data-hoverable='true'][data-variant='interactive']:hover {
  box-shadow: var(--k-shadow-lg, 0 12px 24px rgba(15, 23, 42, 0.18));
  transform: translateY(-4px);
}
`;

registerStyles('card', styles);

const paddingScale: Record<CardPadding, Record<string, unknown> | undefined> = {
  none: undefined,
  sm: atoms({ p: '4' }),
  md: atoms({ p: '5' }),
  lg: atoms({ p: '6' }),
  xl: atoms({ p: '7' })
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    variant = 'surface',
    padding = 'md',
    style,
    className,
    children,
    hoverable = true,
    ...rest
  } = props;

  const resolvedPadding: CardPadding = padding ?? 'md';

  return (
    <div
      ref={ref}
      data-variant={variant}
      data-hoverable={hoverable ? 'true' : undefined}
      className={cx('kanso-card', className)}
      style={mergeAtoms(paddingScale[resolvedPadding], style ?? undefined) as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

