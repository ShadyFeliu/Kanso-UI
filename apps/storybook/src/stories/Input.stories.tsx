import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@kanso-ui/ui';

const meta: Meta<typeof Input> = {
  title: 'Componentes/Campo de texto',
  component: Input,
  args: {
    label: 'Correo electrónico',
    placeholder: 'nombre@dominio.com',
    description: 'Usaremos este correo para notificaciones importantes.'
  },
  argTypes: {
    validationState: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'error']
    },
    hideLabel: {
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Base: Story = {};

export const Éxito: Story = {
  args: {
    validationState: 'success',
    errorMessage: 'Todo correcto'
  }
};

export const Advertencia: Story = {
  args: {
    validationState: 'warning',
    errorMessage: 'Revisa el formato'
  }
};

export const Error: Story = {
  args: {
    validationState: 'error',
    errorMessage: 'Este campo es obligatorio'
  }
};

export const EtiquetaOculta: Story = {
  args: {
    hideLabel: true,
    placeholder: 'Busca algo...'
  }
};

