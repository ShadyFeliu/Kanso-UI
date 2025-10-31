import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('links label and input for accessibility', () => {
    render(<Input label="Email" placeholder="correo@ejemplo.com" />);

    const input = screen.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('shows error state metadata', async () => {
    render(
      <Input
        label="Nombre"
        description="Por favor ingresa tu nombre completo"
        errorMessage="El nombre es obligatorio"
        validationState="error"
      />
    );

    const input = screen.getByLabelText(/nombre/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText(/obligatorio/i)).toBeVisible();
    expect(screen.getByText(/nombre completo/i)).toBeVisible();
  });
});

