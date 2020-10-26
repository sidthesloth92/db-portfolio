import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import { addCamelCaseKeys } from '../../lib';
import { Post } from '../../models/Post';
import s from './PostTile.module.scss';

/**
 * Props for {@link PostTile}.
 */
interface PostTileProps {
  post: Post;
}

/**
 * Tile component to represent each blog post.
 */
const PostTile: React.FC<PostTileProps> = ({ post }) => {
  const delay = Math.random() * 1;
  const styles = addCamelCaseKeys(s);
  const ref = useRef(undefined);

  const handleMouseMove = (event) => {
    let x, y;

    if (event.touches) {
      x = event.touches[0].clientX;
      y = event.touches[0].clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }

    const r = ref?.current?.getBoundingClientRect();
    const dx = ((x - (r.left + Math.floor(r.width / 2))) * -1) / 10;
    const dy = ((y - (r.top + Math.floor(r.height / 2))) * -1) / 10;
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
          className="bg-dark-tint shadow-md rounded overflow-hidden hover:border-dark hover:border-8`">
          <motion.div
            ref={ref}
            className="relative p-4 transtition duration-100"
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
            <Link
              href="/posts/[id]/[slug]"
              as={`/posts/${post.id}/${post.slug}`}>
              <a>
                <div
                  className={`${styles.textFill} relative text-xl uppercase font-black overflow-hidden`}
                  title={post.title}>
                  {post.title}
                </div>
              </a>
            </Link>
            <div className="text-xs text-secondary font-black mt-2 mb-4">
              <div className="mb-1">
                <span>
                  {new Date(post.published_timestamp).toLocaleDateString()}
                </span>
                <span className="px-2">•</span>
                <span>15 mins</span>
              </div>
              <div>
                {post.tag_list.map((tag) => {
                  return (
                    <Link
                      key={tag}
                      href="/posts/tag/[tag]"
                      as={`/posts/tag/${tag}`}>
                      <a className="pr-2">#{tag}</a>
                    </Link>
                  );
                })}
              </div>
            </div>
            <p>{post.description}</p>
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
            transform: 'translateX(98%)',
            transition: {
              delay,
              duration: 1.5,
              ease: 'easeInOut'
            }
          }}
        />
      </motion.div>
    </div>
  );
};

export default PostTile;
