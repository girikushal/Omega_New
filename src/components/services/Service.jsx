import serviceList from "./ServiceList.json";
import Image from "next/image";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import HoverFlip from "../hoverFlip/HoverFlip";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const Service = () => {
  // const ref = useRef();
  // const { ref: inViewRef, inView } = useInView({
  //   triggerOnce: true,
  // });

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  // Use `useCallback` so we don't recreate the function on each render
  // const setRefs = useCallback(
  //   (node) => {
  //     // Ref's from useRef needs to have the node assigned to `current`
  //     ref.current = node;
  //     // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
  //     inViewRef(node);
  //   },
  //   [inViewRef]
  // );

  return (
    <section className="serviceMainWrap sectionGap ">
      <div ref={ref} className="container">
        <div className="row flex-wrap align-items-center">
          <div
            className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${
              inView ? "animationTop" : ""
            }`}
          >
            <h2 className="title">Our Services</h2>
            <p className="subTitle">
              We Provide Reliable Virtual Assistant Services
            </p>
            <p className="desc">
              Partner with us for reliable virtual assistant services that
              prioritize your business needs and deliver consistent results,
              enabling you to focus on what you do best while we handle the
              rest.
            </p>
            <ul className="serviceListWrap ">
              <li>
                <span>
                  <BsCheckCircleFill />
                </span>
                Efficient Support
              </li>
              <li>
                <span>
                  <BsCheckCircleFill />
                </span>
                Cost-Effective Solution
              </li>
              <li>
                <span>
                  <BsCheckCircleFill />
                </span>
                Scalable Assistance
              </li>
            </ul>

            <div className="buttonFill">
              <Link href="/">Read More</Link>
            </div>
          </div>

          <div ref={ref2} className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="serviceInWrap d-flex flex-wrap">
              {serviceList.map((item, index) => {
                return (
                  <>
                    <HoverFlip
                      key={item.id}
                      clas={`imgWrap ${
                        inView2 && index === 0
                          ? "animationTop"
                          : inView2 && index === 1
                          ? "animationTop2"
                          : inView2 && index === 2
                          ? "animationTop3"
                          : inView2 && index === 3
                          ? "animationTop3"
                          : ""
                      }`}
                      frontSide={
                        <>
                          <figure>
                            <Image
                              src={item.iconUrl}
                              alt={item.title}
                              height={63}
                              width={63}
                              className="img-fluid"
                            />
                          </figure>

                          <h3>{item.title}</h3>
                        </>
                      }
                      backSide={
                        <>
                          <p className="desc">{item.desc}</p>
                        </>
                      }
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ${inView ? "animationRight" : ""} */}
      <figure
        className={`backImg 
      `}
      >
        <Image
          src="/send_message_left_icon.png"
          alt="send message icon"
          width={200}
          height={200}
          className="img-fluid"
        />
      </figure>
    </section>
  );
};

export default Service;
