import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

vi.mock('next/navigation', () => ({
  usePathname: () => '/shop',
}));

describe('Header', () => {
  it('is a banner landmark with a labelled primary navigation', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument();
  });

  it('marks the link for the current page', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  it('toggles the menu with aria-expanded and closes on Escape', async () => {
    render(<Header />);
    const toggle = screen.getByRole('button', { name: 'Menu' });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await userEvent.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
