'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import styles from './Header.module.scss';

// TODO(XD): replace with the navigation items from the design.
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const menuId = useId();
  const [isOpen, setIsOpen] = useState(false);

  // Escape closes the open menu from anywhere on the page.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Eden Ibiza
        </Link>

        {/* Disclosure pattern: a button toggles the nav on small screens.
            It is hidden by CSS from the md breakpoint up. */}
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <nav id={menuId} aria-label="Primary" className={styles.nav} data-open={isOpen}>
          <ul role="list" className={styles.list}>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={styles.link}
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
