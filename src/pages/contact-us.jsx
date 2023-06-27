import SubBanner from "@/components/banner/SubBanner";
import React from "react";
import styles from "@/styles/Contact.module.css";
import { GrLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import SendRequest from "@/components/sendRequest/SendRequest";

const Contact = () => {
  return (
    <>
      <SubBanner
        firstTitle={""}
        lastTitle={"Contact Us"}
        desc={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, deleniti."
        }
        link={"Contact"}
        rightImg={"/services_banner_right_image.png"}
      />

      <section className={`sectionGap ${styles.midSection}`}>
        <div className="container">
          <div className={`text-center mb-5 ${styles.upperWrap}`}>
            <div className="title">GET IN TOUCH</div>
            <div className="subTitle">Our Contact Information</div>
            <div className="desc mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laboriosam possimus minima sequi distinctio minus libero
              officia, qui excepturi.
            </div>
          </div>

          <div className={styles.lowerWrap}>
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className={styles.inWrap}>
                  <div className={styles.iconWrap}>
                    <GrLocation />
                  </div>
                  <div className={styles.contWrap}>
                    <h4 className="mb-2">Location</h4>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className={styles.inWrap}>
                  <div className={styles.iconWrap}>
                    <BiPhoneCall />
                  </div>
                  <div className={styles.contWrap}>
                    <h4 className="mb-2">Phone</h4>
                    <Link href="tel: +44-(0) 2033369265">
                      +44-(0) 2033369262 (UK)
                    </Link>
                    <br />
                    <Link href="tel: +977-9801037556">
                      +977-9801037556 (Nepal)
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className={styles.inWrap}>
                  <div className={styles.iconWrap}>
                    <AiOutlineMail />
                  </div>
                  <div className={styles.contWrap}>
                    <h4 className="mb-2">Email</h4>
                    <Link href="mailTo: talent@omegabpo.com">
                      talent@omegabpo.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SendRequest />

      <section className={styles.mapWrap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.267884008109!2d85.33608217523117!3d27.739882276164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19dc5c836b65%3A0x97a928a98f423965!2sOmega%20BPO%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1687771560078!5m2!1sen!2snp"
          width="600"
          height="500"
          //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
