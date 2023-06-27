import Link from "next/link";
import ReactDOM from "react-dom";
import Carousel from "react-bootstrap/Carousel";

import { useInView } from "react-intersection-observer";
import list from "./ProjectList.json";
import styles from "@/styles/Project.module.css";
import Image from "next/image";
import { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

const OurProject = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    // threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    // threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState();

  const activeFunc = (selectedIndex) => {
    console.log("Active indev", selectedIndex);
    setActiveIndex(selectedIndex);
  };

  return (
    <section className={styles.projectWrap}>
      <div className="container-fluid sectionGap">
        <div ref={ref} className="projectSection ">
          <div
            className={` ${styles.leftWrapmain} text-center ${
              inView ? "animationTop" : ""
            }`}
          >
            <div className={styles.leftWrap}>
              <h2 className="title">Our Projects</h2>

              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className={`row ${styles.rightWrap} mt-5 align-items-center`}>
            <div
              ref={ref2}
              className={`${
                styles.listWrapMain
              } col-lg-7 col-md-7 col-sm-12 col-xs-12 ${
                inView2 ? "animationLeft" : ""
              }`}
            >
              <Carousel
                interval={3000}
                controls={true}
                className={styles.testiCarouselWrap}
                fade={true}
                indicators={false}
                pause={false}
                onSelect={activeFunc}
                activeIndex={activeIndex}
                nextIcon={<TbPlayerTrackNextFilled />}
                prevIcon={<TbPlayerTrackPrevFilled />}
              >
                {list.map((item, index) => {
                  return (
                    <Carousel.Item
                      key={item.id}
                      className={styles.carouselItem}
                    >
                      <div key={item.id} className={styles.listWrap}>
                        <Image
                          src={item.imgUrl}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="img-fluid"
                        />

                        {/* <h3>{item.title}</h3>
                        <p>{item.desc}</p> */}
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>

            <div
              ref={ref3}
              className={`${
                styles.listWrapDesc
              }  col-lg-5 col-md-5 col-sm-12 col-xs-12 ${
                inView3 ? "animationRight" : ""
              }`}
            >
              {/* <Carousel
             
              > */}
              {list.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`${styles.listContWrap} ${
                      activeIndex === index ? "PrjActiveDes" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <h3>{item.title}</h3>
                    <p className="desc"> {item.desc}</p>
                  </div>
                );
              })}
              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
