import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Flex } from './Flex';

describe('Flex', () => {
  it('applies direction and gap props', () => {
    render(
      <Flex direction="row" gap="lg" data-testid="flex">
        <span>1</span>
        <span>2</span>
      </Flex>
    );

    const flex = screen.getByTestId('flex');
    expect(flex).toHaveStyle({ display: 'flex', flexDirection: 'row' });
  });

  it('renders inline when requested', () => {
    render(
      <Flex inline data-testid="inline">
        <span>A</span>
      </Flex>
    );

    expect(screen.getByTestId('inline')).toHaveStyle({ display: 'inline-flex' });
  });
});

