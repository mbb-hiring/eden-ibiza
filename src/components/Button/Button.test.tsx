import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders a button that defaults to type="button"', () => {
    render(<Button>Shop now</Button>);

    expect(screen.getByRole('button', { name: 'Shop now' })).toHaveAttribute(
      'type',
      'button',
    );
  });

  it('calls onClick when activated', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Shop now</Button>);

    await userEvent.click(screen.getByRole('button', { name: 'Shop now' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders a link when given an href', () => {
    render(<Button href="/shop">Shop now</Button>);

    expect(screen.getByRole('link', { name: 'Shop now' })).toHaveAttribute(
      'href',
      '/shop',
    );
  });

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Shop now
      </Button>,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Shop now' }));

    expect(onClick).not.toHaveBeenCalled();
  });
});
