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

  it('supports interactive variant and hover control', () => {
    render(
      <Card variant="interactive" hoverable={false} data-testid="interactive">
        Interactivo
      </Card>
    );
    const card = screen.getByTestId('interactive');
    expect(card).toHaveAttribute('data-variant', 'interactive');
    expect(card).not.toHaveAttribute('data-hoverable');
  });
});

