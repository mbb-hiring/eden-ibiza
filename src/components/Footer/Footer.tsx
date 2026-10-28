import Link from 'next/link';
import styles from './Footer.module.scss';

// TODO(XD): replace with the footer links from the design.
const footerLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav aria-label="Footer">
          <ul role="list" className={styles.list}>
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.legal}>
          &copy; {new Date().getFullYear()} Eden Ibiza. Fictional brand.
        </p>
      </div>
    </footer>
  );
}
