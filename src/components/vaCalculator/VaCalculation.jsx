import Image from "next/image";
import Link from "next/link";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const VaCalculation = () => {
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
    <section ref={setRefs} className="vaCalc sectionGap">
      <div className="container">
        <div className="row align-items-center">
          <div
            className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${
              inView && "animationTop"
            }`}
          >
            <Image
              src="/virtual_employee_image.png"
              alt="Pricing Calculate"
              width={400}
              height={400}
              className="img-fluid"
            />
          </div>
          <div
            className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 right ${
              inView && "animationRight"
            }`}
          >
            <div className="title">VIRTUAL EMPLOYEE</div>
            <div className="subTitle">
              Find the Ultimate Virtual Assistant for Your Business
            </div>
            <p className="desc mt-4">
              Discover the perfect virtual assistant tailored to meet your
              business needs and boost productivity. Our team of skilled
              professionals is ready to provide exceptional support and assist
              you in achieving your goals.
            </p>

            <div className="buttonFill">
              <Link href="/">SEE OUR PRICING</Link>
            </div>
          </div>
        </div>
      </div>

      <figure className="backImg">
        <Image
          src="/banner_bottom_white_icon.png"
          alt="send message icon"
          width={200}
          height={200}
          className="img-fluid"
        />
      </figure>

      <figure className={`backImg2 ${inView && "animationDown"}`}>
        <Image
          src="/banner_right_top_transparent_icon.png"
          alt="send message icon"
          width={200}
          height={200}
          className="img-fluid"
        />
      </figure>

      <figure className="backImg3">
        <Image
          src="/banner_white_circles_icons.png"
          alt="send message icon"
          width={200}
          height={200}
          className="img-fluid"
        />
      </figure>
    </section>
  );
};

export default VaCalculation;
