import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { InlineWidget } from "react-calendly";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import { BsFillTelephoneFill, BsMailbox } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const todayDate = new Date();
  const year = todayDate.getFullYear();

  return (
    <>
      {/* <div className="sectionGap">
        <InlineWidget url="https://calendly.com/yourvaappointments/45minfreeconsultation?month=2023-06&date=2023-06-15" />
      </div> */}

      <div className={`${styles.footerWrap} `}>
        <div className="container">
          <div className={styles.upperLogo}>
            <Link href="/">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Omega BPO"
                className="img-fluid"
              />
            </Link>
          </div>

          <div className={styles.midSectioin}>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 d-lg-block d-none"></div>
              <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12 d-md-block d-none">
                <h4 className={styles.footerTitle}>Useful Links</h4>
                <ul className="useFulLinks">
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 d-lg-block d-none">
                <h4 className={styles.footerTitle}>Explore</h4>

                <ul className={styles.exploreLinks}>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 col-md-4 col-sm-6 col-xs-12">
                <h4 className={styles.footerTitle}>Contact Info</h4>
                <ul className={styles.ContactList}>
                  <li>
                    <div className={styles.iconWrap}>
                      <BsFillTelephoneFill />
                    </div>
                    <div className={styles.numWrap}>
                      <Link href="tel: +44-(0) 2033369265">
                        +44-(0) 2033369262 (UK)
                      </Link>
                      <br />
                      <Link href="tel: +977-9801037556">
                        +977-9801037556 (Nepal)
                      </Link>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className={styles.iconWrap}>
                      <BsMailbox />
                    </div>
                    <Link href="mailTo: talent@omegabpo.com">
                      talent@omegabpo.com
                    </Link>
                  </li>
                  <li>
                    <div className={styles.iconWrap}>
                      <ImLocation />
                    </div>
                    Kathmandu, Nepal
                  </li>
                </ul>

                {/* social media  */}
              </div>
            </div>

            <figure className={`mb-0 ${styles.logoRight}`}>
              <Image
                src="/footer_logo.png"
                alt="logo footer"
                width={200}
                height={200}
                className="img-fluid"
              />
            </figure>
          </div>
        </div>
        <div className={styles.lowerSection}>
          <div className="container d-flex justify-content-between align-items-center">
            <p>© Copyright {year} OmegaBPO | All rights reserved</p>
            <ul className={styles.socialLinks}>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/OmegaOutsourcingPvtltd?mibextid=LQQJ4d"
              >
                <li>
                  <BsFacebook />
                </li>
              </Link>

              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHHu-xbZEC-mQAAAYhS5hNwSkTnSabgkcC3fHqoxrQFqIp5LnrSJri5CsB9vayUHqMpArJvusgr3CPjRiwFmf-gw7g7NdEqVf8FxS4BFEjtGp970AtikNlmQSsCAikAgqYJOak=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fomega-bpo%2F"
              >
                <li>
                  <BsLinkedin />
                </li>
              </Link>

              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/omegabpo/"
              >
                <li>
                  <BsInstagram />
                </li>
              </Link>

              <Link
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/OmegaBPO"
              >
                <li>
                  <BsTwitter />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
