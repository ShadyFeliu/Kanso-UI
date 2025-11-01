# Guía de diseño

## Principios

- **Contrast-first**: todos los tokens cumplen WCAG AA (verifica con `var(--k-color-semantic-text-primary)` sobre `background`).
- **Atomic utilities**: combina `Flex`, `Grid`, `Stack` y los nuevos tokens de spacing semántico (`xs` → `3`, `3xl` → `12`).
- **Microinteracciones**: los botones, inputs y tarjetas cuentan con transiciones definidas en `motion.duration` y `motion.easing`. Evita sobreescribirlas a menos que sea necesario.

## Componentes clave

- `Button`: admite iconos (`startIcon`, `endIcon`) y estado solo-icono (`aria-label` requerido).
- `Card`: nueva variante `interactive` con hover opcional (`hoverable`).
- `Input`: decoradores laterales para iconos y mensajes reforzados.
- `Stack`, `Flex`, `Grid`: layout primitives con presets listos (`Stack.Horizontal`, `Grid` con `minColumnWidth`).

## Modo oscuro

El selector de temas de Storybook aplica `lightTheme` o `darkTheme` automáticamente. Para proyectos, combina `KansoProvider` con detección de `prefers-color-scheme`.

```tsx
import { useEffect, useState } from 'react';
import { KansoProvider } from '@kanso-ui/ui';
import { lightTheme, darkTheme } from '@kanso-ui/tokens';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => setMode(event.matches ? 'dark' : 'light');
    setMode(mq.matches ? 'dark' : 'light');
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const theme = mode === 'dark' ? darkTheme : lightTheme;
  return <KansoProvider theme={theme}>{children}</KansoProvider>;
}
```

