/**
 * Represents the body of the page.
 * Projects the children as is inside the wrapper for page body.
 */
const PageBody: React.FC<React.PropsWithChildren> = ({ children }) => (
  <section>{children}</section>
);

export default PageBody;
