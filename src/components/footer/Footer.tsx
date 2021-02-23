import SocialIcons from '../social-icons/SocialIcons';
import TrackLink from '../track-link/TrackLink';

const Footer: React.FC = () => (
  <footer className="bg-dark-shade flex justify-center">
    <div className="w-full max-w-screen-lg p-4 md:p-8">
      <div className="flex flex-wrap w-full justify-between mb-4">
        <section className="w-full sm:w-4/12 mb-8 sm:mb-0">
          <h1 className="text-primary font-cursive text-2xl mb-4">
            Anand Karki
          </h1>
          <p>
            Thank You for visiting my website. I really appreciate that..
            <span role="img" aria-label="celebrate">
              🎉
            </span>{' '}
            Have a wonderful day..{' '}
            <span role="img" aria-label="unicorn">
              🦄
            </span>{' '}
          </p>
        </section>
        <div className="flex w-full sm:w-8/12 sm:justify-end">
          <section>
            <h1 className="text-primary text-2xl mb-2">Links</h1>
            <ul>
              <li className="my-2">
                <TrackLink href="/about" label="Footer" value="about">
                  <a className="ul-hover-effect">About</a>
                </TrackLink>
              </li>
              <li className="my-2">
                <TrackLink href="/works" label="Footer" value="works">
                  <a className="ul-hover-effect">Works</a>
                </TrackLink>
              </li>
              <li className="my-2">
                <TrackLink href="/posts" label="Footer" value="posts">
                  <a className="ul-hover-effect">Posts</a>
                </TrackLink>
              </li>
              <li className="my-2">
                <TrackLink href="/nuggets" label="Footer" value="nuggets">
                  <a className="ul-hover-effect">Nuggets</a>
                </TrackLink>
              </li>
            </ul>
          </section>
          <section className="ml-16 md:ml-24">
            <h1 className="text-primary text-2xl mb-2">Say Hi!</h1>
            <div className="-ml-2">
              <SocialIcons className="text-2xl md:text-3xl mx-1" />
            </div>
            <h1 className="text-primary text-2xl mt-4">Email Me</h1>
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
          <span className="align-middle text-lg" role="img" aria-label="coding">
            &nbsp;❤️&nbsp;
          </span>
          by <span className="text-primary font-cursive">Anand Karki</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
