import Image from "next/image";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Header from "../header/Header";
import Link from "next/link";

const Banner = () => {
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
    <section ref={setRefs} className="BanMain">
      <div className="headerWrap">
        <Header />
      </div>
      <div className="bancontWrap  ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
              <h1 className="bantitle animationLeft">
                Ready to Outsource with Confidence?
                <span className="d-block">
                  {" "}
                  <span className="banYellow">
                    <figure>
                      <Image
                        src="/banYellow.png"
                        alt="banYellow"
                        width={500}
                        height={500}
                        className="img-fluid"
                      />
                    </figure>
                    Our Virtual Assistants
                  </span>
                  {""} Are Here to Help
                </span>
              </h1>

              <p className="banDesc animationLeft">
                Let us help you simplify your workload and enhance productivity.{" "}
              </p>

              <div className="contactLinkWrap animationTop">
                <Link href="/">Book your Discovery Call</Link>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
              <figure className="rightFig ">
                <Image
                  src="/banner_right_image.png"
                  alt="banner_right_image"
                  width={500}
                  height={500}
                  className="img-fluid animationRight"
                />
                <div className="overlayImgFirst animationTop">
                  <Image
                    src="/banner_yellow_green_icon.png"
                    alt="banner_right_image"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />
                </div>

                <div className="overlayImgSecond animationTop">
                  <Image
                    src="/banner_white_circles_icons.png"
                    alt="banner_right_image"
                    width={500}
                    height={500}
                    className="img-fluid"
                  />
                </div>
              </figure>
            </div>
          </div>

          <figure className="topLeft">
            <Image
              src="/banner_left_icon.png"
              alt="top right"
              width={500}
              height={500}
              className="img-fluid"
            />
          </figure>
        </div>
      </div>

      <figure className="topRight">
        <Image
          src="/banner_right_top_transparent_icon.png"
          alt="top right"
          width={500}
          height={500}
          className="img-fluid"
        />
      </figure>

      <figure className="bottomLeft">
        <Image
          src="/banner_bottom_white_icon.png"
          alt="top right"
          width={500}
          height={500}
          className="img-fluid"
        />
      </figure>
    </section>
  );
};

export default Banner;
