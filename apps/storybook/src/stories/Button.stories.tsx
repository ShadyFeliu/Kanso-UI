import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@kanso-ui/ui';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Botón',
  component: Button,
  args: {
    children: 'Acción',
    variant: 'solid',
    size: 'md'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost']
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg']
    },
    fullWidth: {
      control: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Sólido: Story = {
  args: {
    variant: 'solid'
  }
};

export const Contorno: Story = {
  args: {
    variant: 'outline'
  }
};

export const Fantasma: Story = {
  args: {
    variant: 'ghost'
  }
};

export const AbarcaAncho: Story = {
  args: {
    fullWidth: true
  },
  parameters: {
    controls: { exclude: ['fullWidth'] }
  }
};

const IconSparkles = () => <span aria-hidden="true">✨</span>;
const IconArrow = () => <span aria-hidden="true">↗</span>;

export const ConIconos: Story = {
  render: (args) => (
    <Button
      {...args}
      startIcon={<IconSparkles />}
      endIcon={<IconArrow />}
    >
      {args.children ?? 'Acción con iconos'}
    </Button>
  )
};

export const SoloIcono: Story = {
  render: (args) => (
    <Button
      {...args}
      startIcon={<IconSparkles />}
      aria-label="Favorito"
    />
  )
};

