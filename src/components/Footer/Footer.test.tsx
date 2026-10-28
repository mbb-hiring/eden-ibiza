import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('is a contentinfo landmark', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('has a labelled footer navigation with links', () => {
    render(<Footer />);

    const nav = screen.getByRole('navigation', { name: 'Footer' });

    expect(nav).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
  });
});
