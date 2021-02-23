import { motion } from 'framer-motion';
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
        <motion.header
          className="fixed top-0 left-0 w-full h-20 flex justify-center z-10 bg-dark"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.6
            }
          }}>
          <div className="flex w-full max-w-screen-lg h-full justify-between items-center px-8">
            <Link href="/">
              <a className="font-cursive text-3xl text-primary">
              Anand Karki
              </a>
            </Link>
          </div>
        </motion.header>
      )}
    </>
  );
};

export default NavBar;
