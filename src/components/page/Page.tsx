/**
 * Represents a page in the application.
 * Projects the children as is inside the page.
 */
const Page: React.FC = ({ children }) => (
  <div className="max-w-screen-lg  pt-4 md:pt-10 pb-40 px-4 m-auto overflow-hidden">
    {children}
  </div>
);

export default Page;
