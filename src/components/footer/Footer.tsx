import Link from 'next/link';

import SocialIcons from '../social-icons/SocialIcons';

const Footer: React.FC = () => (
  <footer className="bg-dark-shade flex justify-center">
    <div className="w-full max-w-screen-lg p-4 md:p-8">
      <div className="flex flex-wrap w-full justify-between mb-4">
        <section className="w-full sm:w-4/12 mb-8 sm:mb-0">
          <h5 className="text-primary font-cursive mb-4">Dinesh Balaji</h5>
          <p>
            Thank You for visiting my website. Hopefully you learned something
            new..
            <span role="img" aria-label="celebrate" aria-labelledby="celebrate">
              🎉
            </span>{' '}
            Have a wonderful day..{' '}
            <span role="img" aria-label="unicorn" aria-labelledby="unicorn">
              🦄
            </span>{' '}
          </p>
        </section>
        <div className="flex w-full sm:w-8/12 sm:justify-end">
          <section>
            <h5 className="text-primary mb-2">Links</h5>
            <ul>
              <li className="my-2">
                <Link href="/about">
                  <a className="ul-hover-effect">About</a>
                </Link>
              </li>
              <li className="my-2">
                <Link href="/works">
                  <a className="ul-hover-effect">Works</a>
                </Link>
              </li>
              <li className="my-2">
                <Link href="/posts">
                  <a className="ul-hover-effect">Posts</a>
                </Link>
              </li>
              <li className="my-2">
                <Link href="/snippets">
                  <a className="ul-hover-effect">Snippets</a>
                </Link>
              </li>
            </ul>
          </section>
          <section className="ml-16 md:ml-24">
            <h5 className="text-primary mb-2">Say Hi!</h5>
            <div className="-ml-2">
              <SocialIcons />
            </div>
            <h5 className="text-primary mt-4">Email Me</h5>
            <div>
              <a
                className="ul-hover-effect"
                href="mailto:www.sidthesloth@gmail.com">
                www.sidthesloth@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="text-center">
        <p className="mb-2">
          © 2020 | Coded with
          <span
            className="align-middle text-lg"
            role="img"
            aria-label="coding"
            aria-labelledby="coding">
            &nbsp;❤️&nbsp;
          </span>
          by <span className="text-primary font-cursive">Dinesh Balaji</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
