import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="bg-dark-shade flex justify-center">
    <div className="max-w-screen-lg p-8">
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
            <h5 className="text-secondary mb-2">Links</h5>
            <ul>
              <li className="my-2">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className="my-2">
                <Link href="/works">
                  <a>Works</a>
                </Link>
              </li>
              <li className="my-2">
                <Link href="/posts">
                  <a>Posts</a>
                </Link>
              </li>
              <li className="my-2">
                <Link href="/snippets">
                  <a>Snippets</a>
                </Link>
              </li>
            </ul>
          </section>
          <section className="ml-24">
            <h5 className="text-secondary mb-2">Say Hi!</h5>
            <ul>
              <li className="my-2">About</li>
              <li className="my-2">Posts</li>
              <li className="my-2">Snippets</li>sdpo
            </ul>
          </section>
        </div>
      </div>

      <div className="text-center">© 2020 Dinesh Balaji</div>
    </div>
  </footer>
);

export default Footer;
