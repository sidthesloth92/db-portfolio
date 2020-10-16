import Link from 'next/link';

/**
 * Application wide navigation bar that appears at the top for desktop.
 */
const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-center bg-dark d z-10">
      <div className="flex w-full max-w-screen-lg h-full justify-between items-center px-8">
        <Link href="/">
          <a className="font-cursive text-3xl text-primary">Dinesh Balaji</a>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
