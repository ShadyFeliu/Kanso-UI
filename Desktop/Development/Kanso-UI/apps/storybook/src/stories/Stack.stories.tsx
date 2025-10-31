import type { Meta, StoryObj } from '@storybook/react';

import { Button, Card, Stack } from '@kanso-ui/ui';

const meta: Meta<typeof Stack> = {
  title: 'Componentes/Stack',
  component: Stack,
  args: {
    direction: 'row',
    gap: '4',
    align: 'center',
    children: (
      <>
        <Card padding="sm">Bloque A</Card>
        <Card padding="sm">Bloque B</Card>
        <Card padding="sm">Bloque C</Card>
      </>
    )
  },
  argTypes: {
    direction: {
      control: 'inline-radio',
      options: ['row', 'column', 'row-reverse', 'column-reverse']
    },
    gap: {
      control: 'select',
      options: ['2', '3', '4', '5', '6', '8']
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline']
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    direction: 'column',
    align: 'stretch',
    justify: 'start',
    children: (
      <>
        <Button variant="solid">Primario</Button>
        <Button variant="outline">Secundario</Button>
        <Button variant="ghost">Ghost</Button>
      </>
    )
  }
};

