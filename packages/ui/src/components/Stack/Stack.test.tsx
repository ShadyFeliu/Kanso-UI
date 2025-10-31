import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children and applies layout props', () => {
    render(
      <Stack direction="row" gap="6" data-testid="stack">
        <span>Uno</span>
        <span>Dos</span>
      </Stack>
    );

    const stack = screen.getByTestId('stack');
    expect(stack).toHaveStyle({ display: 'flex', flexDirection: 'row' });
    expect(within(stack).getAllByText(/Uno|Dos/)).toHaveLength(2);
  });
});

