import type { Meta, StoryObj } from '@storybook/react';

import { Button, Card, Flex } from '@kanso-ui/ui';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  args: {
    gap: 'md',
    direction: 'row',
    children: (
      <>
        <Card padding="sm">Bloque A</Card>
        <Card padding="sm">Bloque B</Card>
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
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
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

type Story = StoryObj<typeof Flex>;

export const Row: Story = {};

export const Column: Story = {
  args: {
    direction: 'column',
    align: 'stretch',
    children: (
      <>
        <Button variant="solid">Aceptar</Button>
        <Button variant="ghost">Cancelar</Button>
      </>
    )
  }
};

export const Inline: Story = {
  args: {
    inline: true,
    children: (
      <>
        <span>Inline</span>
        <span>Flex</span>
      </>
    )
  }
};

