import {
  forwardRef,
  type CSSProperties,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode
} from 'react';

import { atoms, mergeAtoms, cx, type AtomProps } from '@kanso-ui/styles';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number;
  minColumnWidth?: string;
  gap?: AtomProps['gap'];
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'stretch';
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const resolveTemplate = (columns?: number, minColumnWidth?: string) => {
  if (minColumnWidth) {
    return `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
  }
  if (columns && columns > 0) {
    return `repeat(${columns}, minmax(0, 1fr))`;
  }
  return undefined;
};

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({
    columns,
    minColumnWidth,
    gap = 'md',
    align,
    justify,
    style,
    className,
    children,
    ...rest
  }, ref: ForwardedRef<HTMLDivElement>) => {
    const gridAtoms = atoms({
      display: 'grid',
      gap
    });

    const templateColumns = resolveTemplate(columns, minColumnWidth);
    const composedStyle = mergeAtoms(gridAtoms, {
      gridTemplateColumns: templateColumns,
      alignItems: align,
      justifyContent: justify
    }, style ?? undefined) as CSSProperties;

    return (
      <div
        ref={ref}
        className={cx('kanso-grid', className)}
        style={composedStyle}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

