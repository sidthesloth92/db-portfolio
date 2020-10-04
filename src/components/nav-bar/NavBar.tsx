import styles from './NavBar.module.scss';

/**
 * Application wide navigation bar that appears at the top for desktop.
 */
const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-center bg-dark shadow-md">
      <div className="flex w-full max-w-screen-lg h-full justify-between items-center px-8">
        <span className="font-cursive text-3xl text-primary">
          Dinesh Balaji
        </span>
        <nav className="nav-bar">
          <span className={styles['nav-bar-item']}>About</span>
          <span className={styles['nav-bar-item']}>Works</span>
          <span className={styles['nav-bar-item']}>Posts</span>
          <span className={styles['nav-bar-item']}>Snippets</span>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
