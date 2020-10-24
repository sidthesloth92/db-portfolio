import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import { addCamelCaseKeys } from '../../lib';
import s from './BlogTile.module.scss';

/**
 * Tile component to represent each blog post.
 */
const BlogTile: React.FC = () => {
  const delay = Math.random() * 1;
  const styles = addCamelCaseKeys(s);
  const ref = useRef(undefined);

  const handleMouseMove = (event) => {
    const r = ref?.current?.getBoundingClientRect();
    const dx = ((event.clientX - (r.left + Math.floor(r.width / 2))) * -1) / 20;
    const dy = ((event.clientY - (r.top + Math.floor(r.height / 2))) * -1) / 20;
    ref.current.style.transform = `translate3d(${dx}px, ${dy}px, 0px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate3d(0px, 0px, 0px)`;
  };

  return (
    <div className="w-full md:w-1/2 lg:w-4/12 p-4 overflow-hidden">
      <motion.div
        className="relative overflow-hidden h-full"
        initial={{
          scale: 1
        }}
        exit={{
          transition: {
            duration: 0.3,
            ease: 'circIn'
          },
          scale: 0
        }}>
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: delay + 0.75,
              duration: 0.6
            }
          }}
          className={`${styles.blogTile} bg-dark-tint shadow-md rounded overflow-hidden hover:border-dark hover:border-8`}>
          <motion.div
            ref={ref}
            className="relative p-4 transtition duration-100"
            onTouchEnd={(event) => event.preventDefault()}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
            <Link href={'/posts/[id]'} as={'/posts/1'}>
              <a>
                <div
                  className={`${styles.textFill} relative text-xl uppercase font-black overflow-hidden`}
                  title="What does that = this mean in Javascript?">
                  What does that = this mean in Javascript?
                </div>
              </a>
            </Link>
            <div className="text-xs text-secondary font-bold mt-2 mb-4">
              <div className="mb-1">
                <span>August 7, 2017</span>
                <span className="px-2">•</span>
                <span>15 mins</span>
              </div>
              <div>#js #web #html</div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              reiciendis accusamus laudantium ducimus magnam molestias, dolorum,
              minus dolores iste, consequuntur sint tempore sequi officia
              asperiores totam molestiae veritatis illum soluta.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              delay > 0.4 ? 'var(--color-secondary)' : 'var(--color-primary)'
          }}
          initial={{
            transform: 'translateX(-101%)'
          }}
          animate={{
            transform: [
              'translateX(-101%)',
              'translateX(0%)',
              'translateX(0%)',
              'translateX(98%)'
            ],
            transition: {
              delay,
              duration: 1.5,
              ease: [0.6, 0, 0.4, 1],
              times: [0, 0.5, 0.6, 1]
            }
          }}
        />
      </motion.div>
    </div>
  );
};

export default BlogTile;
