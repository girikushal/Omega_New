import SubBanner from "@/components/banner/SubBanner";
import Header from "@/components/header/Header";
import React from "react";
import serviceList from "@/components/services/ServicePageList.json";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import styles from "@/styles/ServicePage.module.css";
import SendRequest from "@/components/sendRequest/SendRequest";
import Footer from "@/components/footer/Footer";
import { useInView } from "react-intersection-observer";
import Calculator from "@/components/services/Calculator";

const services = () => {
  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });
  return (
    <>
      {/* <Header /> */}
      <SubBanner
        firstTitle={"Our"}
        lastTitle={"Services"}
        desc={
          " We offer a wide range of virtual assistant solutions to support your business needs. Our team of virtual assistants is dedicated to making your work easier, getting more done, and reaching your goals."
        }
        link={"Services"}
        rightImg={"/services_banner_right_image.png"}
      />

      <Calculator />

      <section className={styles.listContWrap}>
        {serviceList.map((item, index) => {
          return (
            <div ref={ref2} key={item.id} className={`${styles.listWrap} `}>
              <div className="container sectionGap">
                <div className="row align-items-center justify-content-between">
                  <div
                    className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${styles.listLeft}`}
                  >
                    <div className={` ${styles.figureWrap}`}>
                      <figure className={`mb-0 ${styles.imgWrap}`}>
                        <Image
                          src={item.imgurl}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="img-fluid"
                        />
                      </figure>

                      <figure className={`mb-0 ${styles.iconWrap}`}>
                        <Image
                          src={item.iconUrl}
                          alt={`${item.title} icon`}
                          width={100}
                          height={100}
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className={`${styles.contentWrap} `}>
                      <h2 className="subTitle">{item.title}</h2>
                      <p className="desc">{item.desc}</p>

                      <ul className={styles.serviceListWrap}>
                        {item.descList.map((item) => {
                          return (
                            <li className="desc">
                              <span>
                                <BsCheckCircleFill />
                              </span>
                              {item}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <SendRequest />
    </>
  );
};

export default services;
