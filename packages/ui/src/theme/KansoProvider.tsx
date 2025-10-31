import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@kanso-ui/styles';
import type { TokenTheme } from '@kanso-ui/tokens';
import { lightTheme } from '@kanso-ui/tokens';

export type KansoProviderProps = PropsWithChildren<{
  theme?: TokenTheme;
  target?: HTMLElement | null;
}>;

export const KansoProvider = ({
  children,
  theme = lightTheme,
  target
}: KansoProviderProps) => (
  <ThemeProvider theme={theme} target={target}>
    {children}
  </ThemeProvider>
);

