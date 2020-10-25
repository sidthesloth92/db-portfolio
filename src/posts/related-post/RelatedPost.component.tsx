import Link from 'next/link';

/**
 * Representsa related post tile instance.
 */
const RelatedPost: React.FC = () => {
  return (
    <div
      className="m-4 first:ml-0 last:mr-0  p-4 bg-dark-tint"
      style={{
        minWidth: '280px'
      }}>
      <Link href={'/posts/[id]'} as={'/posts/1'}>
        <a>
          <div
            className={`relative text-xl uppercase font-black overflow-hidden`}
            title="What does that = this mean in Javascript?">
            What does that = this mean in Javascript?
          </div>
        </a>
      </Link>
      <div className="text-xs text-secondary font-black mt-2">
        <div className="mb-1">
          <span>August 7, 2017</span>
          <span className="px-2">•</span>
          <span>15 mins</span>
        </div>
        <div>#js #web #html</div>
      </div>
    </div>
  );
};

export default RelatedPost;
