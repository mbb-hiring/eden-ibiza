import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type Variant = 'primary' | 'secondary';

type CommonProps = {
  variant?: Variant;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

// Renders a <button> for actions and a link for navigation: pick by purpose,
// not by looks.
export function Button(props: ButtonProps) {
  const { variant = 'primary', className, ...rest } = props;
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (rest.href !== undefined) {
    return <Link {...(rest as Omit<ButtonAsLink, 'variant'>)} className={classes} />;
  }

  const { type = 'button', ...buttonProps } = rest as Omit<ButtonAsButton, 'variant'>;
  return <button {...buttonProps} type={type} className={classes} />;
}
