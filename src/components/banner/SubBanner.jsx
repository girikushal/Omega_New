import React from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/SubBan.module.css";
import { FaAngleRight } from "react-icons/fa";

const SubBanner = ({ firstTitle, lastTitle, desc, link, rightImg }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className={styles.subBanWrap}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
              <h1 className={`animationLeft ${styles.bantitle}`}>
                {firstTitle}
                <span>
                  {" "}
                  <span className={styles.banYellow}>
                    <figure
                      ref={ref2}
                      className={inView2 ? "animationTop" : ""}
                    >
                      <Image
                        src="/banYellow.png"
                        alt="banYellow"
                        width={300}
                        height={300}
                        className="img-fluid"
                      />
                    </figure>
                    {lastTitle}
                  </span>
                </span>
              </h1>

              <p className={`${styles.banDesc} animationLeft`}>{desc}</p>

              {/* <div className="contactLinkWrap animationTop">
                <Link href="/">Book your Discovery Call</Link>
              </div> */}

              <div className={styles.pathWrap}>
                <h3>
                  Home <FaAngleRight />{" "}
                  <span style={{ color: "var(--primary-orange)" }}>{link}</span>
                </h3>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
              <figure className={`${styles.rightImg} mb-0`}>
                <Image
                  // src="/services_banner_right_image.png"
                  src={rightImg}
                  alt={lastTitle}
                  width={400}
                  height={400}
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubBanner;
