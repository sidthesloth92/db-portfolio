/**
 * Represents a page in the application.
 * Projects the children as is inside the page.
 */
const Page: React.FC = ({ children }) => (
  <div className="max-w-screen-lg pt-12 pb-40 px-4 m-auto">{children}</div>
);

export default Page;
