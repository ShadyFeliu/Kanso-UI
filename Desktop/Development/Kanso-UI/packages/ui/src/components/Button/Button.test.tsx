import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  it('renders with default props and handles click', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-variant', 'solid');
    expect(button).toHaveAttribute('data-size', 'md');

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('allows variant and size overrides', () => {
    render(
      <Button variant="outline" size="lg" fullWidth>
        Outline
      </Button>
    );

    const button = screen.getByRole('button', { name: /outline/i });
    expect(button).toHaveAttribute('data-variant', 'outline');
    expect(button).toHaveAttribute('data-size', 'lg');
    expect(button).toHaveAttribute('data-full-width', 'true');
  });
});

