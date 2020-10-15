import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { addCamelCaseKeys } from '../../lib';
import s from './BlogTile.module.scss';

/**
 * Tile component to represent each blog post.
 */
const BlogTile: React.FC = () => {
  const delay = Math.random() * 1;
  const styles = addCamelCaseKeys(s);
  return (
    <div className={`w-full md:w-1/2 lg:w-4/12 p-4 overflow-hidden`}>
      <div className="relative overflow-hidden h-full">
        <motion.div
          // initial={{
          //   opacity: 0,
          //   scale: 0
          // }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          //   transition: {
          //     delay: 0.6 + delay,
          //     duration: 0.6
          //   }
          // }}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.6 + delay + 0.75,
              duration: 0.6
            }
          }}
          className={`${styles.blogTile} bg-dark-tint shadow-md rounded overflow-hidden hover:border-dark hover:border-8`}>
          <img className="w-full" src="/img/blog-placeholder.png" alt="img" />
          <div className="p-4">
            <h6 className="text-primary font-bold mb-4">
              <Link href={'/posts/[id]'} as={'/posts/1'}>
                <a>What does that = this mean in Javascript?</a>
              </Link>
            </h6>
            <div className="text-xs font-bold mb-4">
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
          </div>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-secondary"
          initial={{
            transform: 'translateX(-101%)'
          }}
          animate={{
            transform: [
              'translateX(-101%)',
              'translateX(0%)',
              'translateX(0%)',
              'translateX(101%)'
            ],
            transition: {
              delay: 0.6 + delay,
              duration: 1.5,
              ease: [0.6, 0, 0.4, 1],
              times: [0, 0.5, 0.6, 1]
            }
          }}
        />
      </div>
    </div>
  );
};

export default BlogTile;
