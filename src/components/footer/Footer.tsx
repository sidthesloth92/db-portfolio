import SocialIcons from '../social-icons/SocialIcons';
import TrackLink from '../track-link/TrackLink';

const Footer: React.FC = () => (
  <footer className="bg-dark-shade flex justify-center">
    <div className="w-full max-w-screen-lg p-4 md:p-8">
      <div className="flex flex-wrap w-full justify-between mb-4">
        <section className="w-full sm:w-4/12 mb-8 sm:mb-0">
        <h1 className="text-primary text-2xl mb-2">Pages  </h1>
            <ul style={{ display: "inline-flex" }}>
              <li className="mx-2 ml-0 my-1" style={{ display: "inline" }}>
                <TrackLink href="/about" label="Footer" value="about">
                  <a className="ul-hover-effect">About</a>
                </TrackLink>
              </li>
              <li className="mx-2 my-1" style={{ display: "inline" }}>
                <TrackLink href="/works" label="Footer" value="works">
                  <a className="ul-hover-effect">Works</a>
                </TrackLink>
              </li>
              <li className="mx-2 my-1" style={{ display: "inline" }}>
                <TrackLink href="/posts" label="Footer" value="posts">
                  <a className="ul-hover-effect">Posts</a>
                </TrackLink>
              </li>
              <li className="mx-2 my-1" style={{ display: "inline" }}>
                <TrackLink href="/nuggets" label="Footer" value="nuggets">
                  <a className="ul-hover-effect">Nuggets</a>
                </TrackLink>
              </li>
            </ul>
        </section>
        <div className="flex w-full sm:w-8/12 sm:justify-end">
          <section>
          {" "}
          </section>
          <section className="ml-16 md:ml-24">

          <h1 className="text-primary text-2xl mb-2 mr-1" style={{ textAlign: "right" }}>Socials</h1>
            <div>
              <SocialIcons className="text-2xl md:text-3xl mx-1" />
            </div>

            
          </section>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
