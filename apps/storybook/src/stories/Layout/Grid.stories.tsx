import type { Meta, StoryObj } from '@storybook/react';

import { Card, Grid } from '@kanso-ui/ui';

const sampleCards = Array.from({ length: 6 }, (_, index) => (
  <Card padding="sm" key={index}>
    Bloque {index + 1}
  </Card>
));

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  args: {
    columns: 3,
    gap: 'lg',
    children: sampleCards
  },
  argTypes: {
    columns: {
      control: 'number'
    },
    minColumnWidth: {
      control: 'text'
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
    }
  }
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Columns: Story = {};

export const AutoFit: Story = {
  args: {
    columns: undefined,
    minColumnWidth: '200px'
  }
};

