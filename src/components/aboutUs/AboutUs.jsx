import Image from "next/image";
import Link from "next/link";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
  });

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <section ref={setRefs} className="aboutUsMain sectionGap">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="imageContainer">
              <figure className={`mb-0 img_one ${inView && "animationTop"}`}>
                <Image
                  src="/aboutus_img_1.jpg"
                  alt="aboutusImage"
                  className="img-fluid "
                  width={400}
                  height={400}
                />
              </figure>
              <figure className={`mb-0 img_two ${inView && "animationTop2"} `}>
                <Image
                  src="/aboutus_img_2.jpg"
                  alt="aboutusImage"
                  className="img-fluid "
                  width={300}
                  height={300}
                />
              </figure>
              <figure className={`mb-0 img_three ${inView && "animationTop3"}`}>
                <Image
                  src="/aboutus_img_3.jpg"
                  alt="aboutusImage"
                  className="img-fluid "
                  width={200}
                  height={200}
                />
              </figure>
            </div>
          </div>

          <div
            className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${
              inView && "animationRight"
            }`}
          >
            <div className="aboutRight">
              <h6 className="title">About Us</h6>
              <h2 className="subTitle">
                Say Goodbye to Overwhelm: Our Virtual Assistants Bring Ease and
                Efficiency
              </h2>
              <h3 className="descTitle">How can we help your business?</h3>
              <p className="desc">
                Our mission is to provide affordable, reliable, and high-quality
                virtual assistant services to fuel our client&apos;s success
                journey.
              </p>
              <p className="descTitle">Why become our partner?</p>
              <p className="desc">
                With our commitment to quality services and transparent
                approach, we strive to foster enduring relationships.
              </p>

              <div className="buttonFill">
                <Link href="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        <figure className="aboutBackImg">
          <Image
            src="/aboutus_shape.png"
            alt="aboutusImage"
            className="img-fluid "
            width={500}
            height={500}
          />
        </figure>
      </div>
    </section>
  );
};

export default AboutUs;
