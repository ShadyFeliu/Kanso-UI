# Guía de contribución de componentes

## Checklist previa a PR

- [ ] El componente vive en `src/components/NOMBRE` con un `index.ts` que
  expone la API pública.
- [ ] Existe al menos una prueba con Testing Library que cubre estados críticos.
- [ ] Se documenta el componente en Storybook con controles representativos.
- [ ] Los estilos utilizan tokens y utilidades de `@kanso-ui/styles` (nada de
  valores mágicos).
- [ ] Se respeta accesibilidad: roles adecuados, `aria-*`, navegación con
  teclado y mensajes de error.
- [ ] Se actualiza el changelog mediante `pnpm changeset` si el cambio es
  visible para consumidores.

## Buenas prácticas

- Prefiere composición sobre herencia: expón `slots` o props para pasar
  componentes hijos.
- Mantén las props minimalistas y semánticas. Evita duplicar props que ya
  existen en HTML.
- Asegura compatibilidad SSR: evita referencias a `window`/`document` fuera de
  efectos protegidos.
- Siempre que necesites nuevos tokens, añádelos en `@kanso-ui/tokens` antes de
  usarlos.
- Si se requiere estado complejo, expón también hooks para controladores
  externos (`useComponent`).

## Estructura sugerida

```text
src/components/Nombre/
  Nombre.tsx
  Nombre.test.tsx
  Nombre.stories.tsx (en Storybook)
  helpers.ts (si aplica)
  README.md (opcional, secciones específicas)
```

