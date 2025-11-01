import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from './Grid';

describe('Grid', () => {
  it('renders with explicit columns', () => {
    render(
      <Grid columns={3} data-testid="grid">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Grid>
    );

    expect(screen.getByTestId('grid')).toHaveStyle({ display: 'grid' });
  });

  it('supports minColumnWidth auto-fit layout', () => {
    render(
      <Grid minColumnWidth="240px" data-testid="auto-grid">
        <span>A</span>
      </Grid>
    );

    const grid = screen.getByTestId('auto-grid');
    expect(grid.style.gridTemplateColumns).toContain('minmax(240px');
  });
});

