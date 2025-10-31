import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card } from './Card';

describe('Card', () => {
  it('renders children content', () => {
    render(<Card>Contenido</Card>);
    expect(screen.getByText('Contenido')).toBeInTheDocument();
  });

  it('applies provided variant', () => {
    render(
      <Card variant="elevated" data-testid="card">
        Elevado
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveAttribute('data-variant', 'elevated');
  });
});

