import {
  forwardRef,
  type CSSProperties,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode
} from 'react';

import { atoms, mergeAtoms, type AtomProps, cx } from '@kanso-ui/styles';

type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

const alignToCss: Record<Align, AtomProps['align']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline'
};

const justifyToCss: Record<Justify, AtomProps['justify']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly'
};

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: AtomProps['direction'];
  gap?: AtomProps['gap'];
  align?: Align;
  justify?: Justify;
  wrap?: AtomProps['wrap'];
  inline?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({
    direction = 'row',
    gap = 'md',
    align,
    justify,
    wrap,
    inline = false,
    style,
    className,
    children,
    ...rest
  }, ref: ForwardedRef<HTMLDivElement>) => {
    const flexAtoms = atoms({
      display: inline ? 'inline-flex' : 'flex',
      direction,
      gap,
      align: align ? alignToCss[align] : undefined,
      justify: justify ? justifyToCss[justify] : undefined,
      wrap
    });

    return (
      <div
        ref={ref}
        className={cx('kanso-flex', className)}
        style={mergeAtoms(flexAtoms, style ?? undefined) as CSSProperties}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'Flex';

