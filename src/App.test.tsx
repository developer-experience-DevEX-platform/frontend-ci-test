import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the greeting', () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toBe(
      'Hello from frontend-ci-test',
    );
  });
});
