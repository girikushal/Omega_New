import SubBanner from "@/components/banner/SubBanner";
import Blog from "@/components/blog/Blog";
import OurProject from "@/components/ourProject/OurProject";
import SendRequest from "@/components/sendRequest/SendRequest";
import Service from "@/components/services/Service";
import VaCalculation from "@/components/vaCalculator/VaCalculation";
import Image from "next/image";
import React from "react";
import styles from "@/styles/About.module.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });
  return (
    <>
      <SubBanner
        firstTitle={""}
        lastTitle={"About Us"}
        desc={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, deleniti."
        }
        link={"About us"}
        rightImg={"/services_banner_right_image.png"}
      />

      {/* first section  */}
      <section className="introAbout sectionGap">
        <div ref={ref} className="container">
          <div
            className={`upperSection text-center mb-5 ${
              inView ? "animationTop" : ""
            }`}
          >
            <div className={` ${inView ? "animationTop" : ""}`}>
              {/* <h6 className="title">About Us</h6> */}
              <h2 className={`subTitle `}>
                Say Goodbye to Overwhelm: Our Virtual Assistants Bring Ease and
                Efficiency
              </h2>
              <h3 className="descTitle">How can we help your business?</h3>
              <p className="desc">
                Our mission is to provide affordable, reliable, and high-quality
                virtual assistant services to fuel our client&apos;s success
                journey.
              </p>
              <p className="descTitle">
                Why become our partner? With our commitment to quality services
                and transparent approach, we strive to foster enduring
                relationships.
              </p>
            </div>
          </div>

          <div ref={ref2} className="row position-relative ">
            <div
              className={`col-md-6 col-lg-6 col-sm-12 col-xs-12  ${
                inView2 ? "animationLeft" : ""
              }`}
            >
              <figure className={` text-end ${styles.marginPhone}`}>
                <Image
                  src="/aboutus_section_1.jpg"
                  alt="about us"
                  width={496}
                  height={496}
                  className="img-fluid"
                />
              </figure>
            </div>

            <div
              className={`${styles.overlayContainer}  ${
                inView2 ? "animationTop2" : ""
              }`}
            >
              <p>
                Grow <br /> with us
              </p>
            </div>

            <figure
              className={`mb-0 ${styles.boxAbsoulte}  ${
                inView2 ? "animationTop3" : ""
              }`}
            >
              <Image
                src="/aboutus_section_shape2.png"
                alt="about us"
                width={165}
                height={165}
                className="img-fluid"
              />
            </figure>

            <div
              className={`col-md-6 col-lg-6 col-sm-12 col-xs-12  ${
                inView2 ? "animationRight" : ""
              }`}
            >
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <figure className="mb-4">
                    <Image
                      src="/aboutus_section_2.jpg"
                      alt="about us"
                      width={500}
                      height={500}
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <figure className="mb-0">
                    <Image
                      src="/aboutus_section_3.jpg"
                      alt="about us"
                      width={500}
                      height={500}
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <VaCalculation />
      <OurProject />
      <SendRequest />
      <Blog />
    </>
  );
};

export default About;
