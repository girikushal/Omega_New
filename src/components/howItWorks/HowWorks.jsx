import Image from "next/image";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/HowWork.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbTargetArrow, TbBulb } from "react-icons/tb";

const HowWorks = () => {
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
    <div className={`${styles.howWrokWrap} `}>
      <div className="container">
        <div ref={setRefs} className="mb-5 upperSection text-center">
          <h2 className="title">How It Works</h2>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            repellendus odit voluptates expedita eum nisi earum saepe,
            distinctio accusantium velit!
          </p>
        </div>

        <div className={styles.lowerWeWork}>
          <div
            className={`${styles.shapeDiv} ${styles.shapeDiv1} ${
              inView && "animationTop2"
            }`}
          >
            {/* <Image
              src="/transparency.png"
              alt="how we work"
              width={80}
              height={80}
              className="img-fluid"
            /> */}
            <div className={styles.iconWrap}>
              <BiSearchAlt />
            </div>

            <p className={`desc ${styles.content}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              commodi repellendus quam?
            </p>
          </div>
          <div
            className={`${styles.shapeDiv} ${styles.shapeDiv2} ${
              inView && "animationTop3"
            }`}
          >
            {/* <Image
              src="/dartboard-and-dart.png"
              alt="how we work"
              width={80}
              height={80}
              className="img-fluid"
            /> */}

            <div className={styles.iconWrap}>
              <TbTargetArrow />
            </div>

            <p className={`desc ${styles.content}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              commodi repellendus quam?
            </p>
          </div>
          <div
            className={`${styles.shapeDiv} ${styles.shapeDiv3} ${
              inView && "animationTop3"
            }`}
          >
            {/* <Image
              src="/lightbulb.png"
              alt="how we work"
              width={80}
              height={80}
              className="img-fluid"
            /> */}

            <div className={styles.iconWrap}>
              <TbBulb />
            </div>

            <p className={`desc ${styles.content}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              commodi repellendus quam?
            </p>
          </div>
          <div
            className={`${styles.shapeDiv} ${styles.shapeDiv4} ${
              inView && "animationTop3"
            }`}
          >
            {/* <Image
              src="/network.png"
              alt="how we work"
              width={80}
              height={80}
              className="img-fluid"
            /> */}

            <div className={styles.iconWrap}>
              <BiSearchAlt />
            </div>

            <p className={`desc ${styles.content}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              commodi repellendus quam?
            </p>
          </div>
          <div
            className={`${styles.shapeDiv} ${styles.shapeDiv5} ${
              inView && "animationTop3"
            }`}
          >
            {/* <Image
              src="/edit.png"
              alt="how we work"
              width={80}
              height={80}
              className="img-fluid"
            /> */}

            <div className={styles.iconWrap}>
              <BiSearchAlt />
            </div>

            <p className={`desc ${styles.content}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              commodi repellendus quam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
