import Link from 'next/link';
import { useMemo } from 'react';

import { addCamelCaseKeys } from '../../lib';
import s from './NavBar.module.scss';

/**
 * Application wide navigation bar that appears at the top for desktop.
 */
const NavBar: React.FC = () => {
  const styles = useMemo(() => addCamelCaseKeys(s), []);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-center bg-dark shadow-md z-10">
      <div className="flex w-full max-w-screen-lg h-full justify-between items-center px-8">
        <span className="font-cursive text-3xl text-primary">
          Dinesh Balaji
        </span>
        <nav className="nav-bar">
          <Link href="/about">
            <a className={styles.navBarItem}>About</a>
          </Link>
          <Link href="/works">
            <a className={styles.navBarItem}>Works</a>
          </Link>
          <Link href="/posts">
            <a className={styles.navBarItem}>Posts</a>
          </Link>
          <Link href="/snippets">
            <a className={styles.navBarItem}>Snippets</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
