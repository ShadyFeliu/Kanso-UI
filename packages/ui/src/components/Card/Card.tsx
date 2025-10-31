import {
  forwardRef,
  type CSSProperties,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode
} from 'react';

import { atoms, mergeAtoms, cx } from '@kanso-ui/styles';

import { registerStyles } from '../../styles/registry';

export type CardVariant = 'surface' | 'outline' | 'elevated';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const styles = `
.kanso-card {
  position: relative;
  border-radius: var(--k-radius-lg, 0.75rem);
  background: var(--k-color-semantic-surface, #ffffff);
  color: var(--k-color-semantic-text-primary, #0f172a);
  transition:
    box-shadow var(--k-motion-duration-fast, 150ms) ease,
    transform var(--k-motion-duration-fast, 150ms) ease,
    border-color var(--k-motion-duration-fast, 150ms) ease;
}

.kanso-card[data-variant='outline'] {
  border: 1px solid var(--k-color-semantic-border, #e2e8f0);
}

.kanso-card[data-variant='elevated'] {
  box-shadow: var(--k-shadow-md, 0 4px 6px rgba(15, 23, 42, 0.12));
}

.kanso-card[data-variant='elevated']:hover {
  transform: translateY(-2px);
  box-shadow: var(--k-shadow-lg, 0 10px 15px rgba(15, 23, 42, 0.22));
}

.kanso-card[data-variant='surface'] {
  border: 1px solid rgba(15, 23, 42, 0.04);
}
`;

registerStyles('card', styles);

const paddingScale: Record<CardPadding, Record<string, unknown> | undefined> = {
  none: undefined,
  sm: atoms({ p: '4' }),
  md: atoms({ p: '5' }),
  lg: atoms({ p: '6' })
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    variant = 'surface',
    padding = 'md',
    style,
    className,
    children,
    ...rest
  } = props;

  const resolvedPadding: CardPadding = padding ?? 'md';

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={cx('kanso-card', className)}
      style={mergeAtoms(paddingScale[resolvedPadding], style ?? undefined) as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

