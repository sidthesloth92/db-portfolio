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
        <header className="nav-bar fixed top-0 left-0 w-full h-20 flex justify-center z-10 bg-dark">
          <div className="flex w-full max-w-screen-lg h-full justify-between items-center px-8">
            <Link href="/">
              <a className="font-cursive text-3xl text-primary">
                Dinesh Balaji
              </a>
            </Link>
          </div>
        </header>
      )}

      <style jsx>
        {`
          .nav-bar {
            box-shadow: 0px 0px 30px 25px rgba(32, 37, 44, 1);
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
