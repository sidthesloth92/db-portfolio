import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Application wide navigation bar that appears at the top for desktop.
 */
const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <>
      {router.pathname.length > 1 && (
        <header className="fixed top-0 left-0 w-full h-20 flex justify-center d z-10">
          <div className="flex w-full max-w-screen-lg h-full justify-between items-center px-8">
            <Link href="/">
              <a className="font-cursive text-3xl text-primary">
                Dinesh Balaji
              </a>
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default NavBar;
