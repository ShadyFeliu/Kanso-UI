import type { Meta, StoryObj } from '@storybook/react';

import { Card, Stack } from '@kanso-ui/ui';

const meta: Meta<typeof Card> = {
  title: 'Componentes/Tarjeta',
  component: Card,
  args: {
    children: (
      <Stack gap="4">
        <h3 style={{ fontSize: 'var(--k-typography-sizes-lg)' }}>Título de tarjeta</h3>
        <p style={{ color: 'var(--k-color-semantic-text-secondary)' }}>
          Las tarjetas agrupan contenido y acciones relacionadas. Mantén los textos
          breves y claros.
        </p>
      </Stack>
    )
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['surface', 'outline', 'elevated', 'interactive']
    },
    padding: {
      control: 'inline-radio',
      options: ['none', 'sm', 'md', 'lg', 'xl']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Superficie: Story = {};

export const Contorno: Story = {
  args: {
    variant: 'outline'
  }
};

export const Elevada: Story = {
  args: {
    variant: 'elevated'
  }
};

export const Interactiva: Story = {
  args: {
    variant: 'interactive',
    padding: 'lg'
  }
};

