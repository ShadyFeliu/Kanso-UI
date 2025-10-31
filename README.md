# Kanso UI

Librería de componentes React minimalista enfocada en brindar una base flexible
para productos que necesiten personalizar estética y comportamiento sin partir
desde cero. Está compuesta por tres paquetes principales:

- `@kanso-ui/tokens`: tokens de diseño y utilidades para exponer variables CSS.
- `@kanso-ui/styles`: motor ligero de theming, utilidades atómicas y helpers.
- `@kanso-ui/ui`: componentes accesibles construidos sobre los tokens y las
  utilidades comunes.

La documentación viva se mantiene en Storybook, configurado como fuente única.

## Requisitos

- Node.js >= 18.18
- pnpm >= 9

## Scripts principales

- `pnpm install` — instala dependencias.
- `pnpm dev` — ejecuta los procesos de desarrollo en paralelo (por ahora
  Storybook y watches de paquetes).
- `pnpm lint` — corre ESLint en todos los paquetes.
- `pnpm test` — ejecuta Vitest en todos los paquetes.
- `pnpm build` — genera artefactos listos para publicación.
- `pnpm --filter storybook dev` — abre Storybook en modo interactivo.

## Estructura

```text
apps/
  storybook/        # documentación y playground
packages/
  tokens/           # fuente de verdad de tokens y temas
  styles/           # utilidades atómicas y ThemeProvider
  ui/               # componentes React
```

## Flujo de trabajo

1. Crear rama feature.
2. Desarrollar componentes y pruebas correspondientes.
3. Ejecutar `pnpm lint` y `pnpm test`.
4. Documentar el componente en Storybook.
5. Registrar el cambio con `pnpm changeset`.
6. Abrir Pull Request siguiendo la checklist en `packages/ui/CONTRIBUTING.md`.

## Publicación

Se usa Changesets con SemVer. Para generar versiones:

```bash
pnpm changeset              # crear changelog para los paquetes modificados
pnpm changeset version      # actualizar versiones
pnpm build                  # asegurar builds antes de publicar
pnpm changeset publish      # publicar en npm
```

## Roadmap inicial

- Estados globales de tema (modo oscuro y temas de marca).
- Componentes compuestos (Select, Modal, Tabla, Tabs).
- Pruebas visuales con Chromatic.
- Paquete preset de Tailwind usando tokens.

Consulta el archivo `docs/roadmap.md` para más detalles.

