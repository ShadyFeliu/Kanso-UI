import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import { atoms, mergeAtoms, cx, type AtomProps } from '@kanso-ui/styles';
import type { SpacingScaleKey } from '@kanso-ui/tokens';

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

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: AtomProps['direction'];
  gap?: SpacingScaleKey;
  align?: Align;
  justify?: Justify;
  wrap?: AtomProps['wrap'];
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export const Stack = (props: StackProps) => {
  const {
    direction = 'column',
    gap = '4',
    align,
    justify,
    wrap,
    style,
    className,
    children,
    ...rest
  } = props;
  const stackAtoms = atoms({
    display: 'flex',
    direction,
    gap,
    align: align ? alignToCss[align] : undefined,
    justify: justify ? justifyToCss[justify] : undefined,
    wrap
  });

  return (
    <div
      className={cx('kanso-stack', className)}
      style={mergeAtoms(stackAtoms, style ?? undefined) as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
};

