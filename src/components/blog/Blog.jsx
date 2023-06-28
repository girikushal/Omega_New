import blogList from "./blogList.json";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
  });

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <>
      <div ref={setRefs} className={`${styles.blogWrap} sectionGap`}>
        <div className="container">
          <div
            className={`${styles.upperWrap} text-center ${
              inView && "animationTop"
            }`}
          >
            <div className="title">Blogs</div>
            <div className="subTitle">Our Recent Blogs</div>
          </div>

          <div className={styles.listWrap}>
            {blogList.map((item, index) => {
              return (
                <Link
                  key={item.id}
                  href="/"
                  className={`${styles.listIn} ${
                    inView && index === 0
                      ? "animationTop"
                      : inView && index === 1
                      ? "animationTop2"
                      : inView && index === 2
                      ? "animationTop3"
                      : inView && index === 3
                      ? "animationTop3"
                      : ""
                  }`}
                >
                  <figure className={styles.imgWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="img-fluid"
                    />
                  </figure>

                  <div className={styles.listContWrap}>
                    <h3 className="listTitle">{item.title}</h3>
                    <p className="desc">{item.desc}</p>
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
