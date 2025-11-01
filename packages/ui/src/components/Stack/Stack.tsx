import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';

import { atoms, mergeAtoms, cx, type AtomProps } from '@kanso-ui/styles';

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
  gap?: AtomProps['gap'];
  align?: Align;
  justify?: Justify;
  wrap?: AtomProps['wrap'];
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const BaseStack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    direction = 'column',
    gap = 'md',
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
      ref={ref}
      className={cx('kanso-stack', className)}
      style={mergeAtoms(stackAtoms, style ?? undefined) as CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
});

BaseStack.displayName = 'Stack';

const createPreset = (name: string, presetProps: Partial<StackProps>) => {
  const Component = forwardRef<HTMLDivElement, StackProps>((props, ref) => (
    <BaseStack ref={ref} {...presetProps} {...props} />
  ));
  Component.displayName = name;
  return Component;
};

const StackHorizontal = createPreset('Stack.Horizontal', { direction: 'row', align: 'center' });
const StackVertical = createPreset('Stack.Vertical', { direction: 'column' });

export const Stack = Object.assign(BaseStack, {
  Horizontal: StackHorizontal,
  Vertical: StackVertical
});

