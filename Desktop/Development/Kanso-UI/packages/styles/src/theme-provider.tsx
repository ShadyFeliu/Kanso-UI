import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from 'react';

import {
  cssVar,
  themeToCss,
  tokensToCssVariables,
  type TokenTheme,
  lightTheme
} from '@kanso-ui/tokens';

type ThemeProviderProps = PropsWithChildren<{
  theme?: TokenTheme;
  target?: HTMLElement | null;
}>;

type ThemeContextValue = {
  theme: TokenTheme;
  setTheme: (theme: TokenTheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const applyThemeToElement = (theme: TokenTheme, element: HTMLElement): void => {
  const variables = tokensToCssVariables(theme);
  Object.entries(variables).forEach(([name, value]) => {
    element.style.setProperty(name, value);
  });
};

export const ThemeProvider = ({
  children,
  theme: providedTheme = lightTheme,
  target
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<TokenTheme>(providedTheme);

  useEffect(() => {
    setTheme(providedTheme);
  }, [providedTheme]);

  const element = useMemo<HTMLElement | null>(() => {
    if (target) {
      return target;
    }
    if (typeof document === 'undefined') {
      return null;
    }
    return document.documentElement;
  }, [target]);

  useIsomorphicLayoutEffect(() => {
    if (!element) {
      return;
    }
    applyThemeToElement(theme, element);
  }, [theme, element]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const getThemeCssText = (theme: TokenTheme): string => themeToCss(theme);

export const varName = (path: string | Array<string | number>, fallback?: string): string =>
  cssVar(path, fallback);

