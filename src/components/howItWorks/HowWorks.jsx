import Image from "next/image";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/HowWork.module.css";
import { BiSearchAlt, BiNotepad } from "react-icons/bi";
import { TbTargetArrow, TbBulb } from "react-icons/tb";
import { FaCubes } from "react-icons/fa";

const HowWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className={`${styles.howWrokWrap} `}>
      <div ref={ref} className="container">
        <div
          className={`mb-5 upperSection text-center ${
            inView ? "animationTop" : ""
          }`}
        >
          <h2 className="title">How It Works</h2>
          <p className="desc">
            Once you decide to partner with Omega BPO for virtual assistant
            services, we ensure a seamless deployment process to get your
            virtual assistant up and running quickly.
          </p>
        </div>

        <div ref={ref2} className={styles.lowerWeWork}>
          <div
            className={`${styles.shapeOuter} ${inView2 && "hwAnimationTop1"}`}
          >
            <div className={`${styles.shapeDiv} ${styles.shapeDiv1} `}>
              <div className={styles.iconWrap}>
                <BiSearchAlt />
              </div>

              <p className={`desc ${styles.content}`}>
                <span className={styles.dropCover}>
                  <span
                    className={`${styles.drop} ${inView2 && "dropanimation"}`}
                  ></span>
                </span>
                <span className={styles.title}>
                  <strong>NEEDS ASSESSMENT</strong>
                </span>
                We assess your needs and goals to understand the tasks and
                responsibilities you require assistance with
              </p>
            </div>

            <span
              className={`${styles.after} ${inView2 && "hwAnimationTopafter"}`}
            ></span>
          </div>

          <div
            className={`${styles.shapeOuter} ${inView2 && "hwAnimationTop2"}`}
          >
            <div className={`${styles.shapeDiv} `}>
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
                <span className={styles.dropCover}>
                  <span
                    className={`${styles.drop} ${inView2 && "dropanimation"}`}
                  ></span>
                </span>
                <span className={styles.title}>
                  <strong>SKILL MATCHING</strong>
                </span>
                Based on your requirements, we match you with a skilled virtual
                assistant who has the right expertise.
              </p>
            </div>
            <span
              className={`${styles.after} ${inView2 && "hwAnimationTopafter"}`}
            ></span>
          </div>

          <div
            className={`${styles.shapeOuter} ${inView2 && "hwAnimationTop3"}`}
          >
            <div className={`${styles.shapeDiv} ${styles.shapeDiv3} `}>
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
                <span className={styles.dropCover}>
                  <span
                    className={`${styles.drop} ${inView2 && "dropanimation"}`}
                  ></span>
                </span>
                <span className={styles.title}>
                  <strong>ONBOARDING AND TRAINING</strong>
                </span>
                We onboard and train the virtual assistant to ensure they
                understand your business processes and specific requirements.
              </p>
            </div>
            <span
              className={`${styles.after} ${inView2 && "hwAnimationTopafter"}`}
            ></span>
          </div>

          <div
            className={`${styles.shapeOuter} ${inView2 && "hwAnimationTop4"}`}
          >
            <div className={`${styles.shapeDiv} ${styles.shapeDiv4} `}>
              {/* <Image
              src="/network.png"
              alt="how we work"
              width={80}
              height={80}
              className="img-fluid"
            /> */}

              <div className={styles.iconWrap}>
                <FaCubes />
              </div>

              <p className={`desc ${styles.content}`}>
                <span className={styles.dropCover}>
                  <span
                    className={`${styles.drop} ${inView2 && "dropanimation"}`}
                  ></span>
                </span>
                <span className={styles.title}>
                  <strong>INTEGRATION</strong>
                </span>
                We seamlessly integrate the virtual assistant into your existing
                workflows and systems, working dosely with your team.
              </p>
            </div>
            <span
              className={`${styles.after} ${inView2 && "hwAnimationTopafter"}`}
            ></span>
          </div>

          <div
            className={`${styles.shapeOuter} ${inView2 && "hwAnimationTop5"}`}
          >
            <div className={`${styles.shapeDiv} ${styles.shapeDiv5} `}>
              {/* <Image
              src="/edit.png"
              alt="how we work"
              width={80}
              height={80}
              className="img-fluid"
            /> */}

              <div className={styles.iconWrap}>
                <BiNotepad />
              </div>

              <p className={`desc ${styles.content}`}>
                <span className={styles.dropCover}>
                  <span
                    className={`${styles.drop} ${inView2 && "dropanimation"}`}
                  ></span>
                </span>
                <span className={styles.title}>
                  <strong>ONGOING SUPPORT</strong>
                </span>
                Our dedicated team provides continuous support and monitoring to
                ensure the virtual assistant performs at the highest level
              </p>
            </div>
            <span
              className={`${styles.after} ${
                inView2 && "hwAnimationTopafter"
              } d-md-none d-lg-none`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
