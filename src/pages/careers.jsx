import SubBanner from "@/components/banner/SubBanner";
import React from "react";
import listing from "@/components/careerList/careerList";
import Image from "next/image";
import { BiTime } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/Career.module.css";

const Careers = () => {
  return (
    <>
      <SubBanner
        firstTitle={"Join Our"}
        lastTitle={"Team"}
        desc={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, deleniti."
        }
        link={"Career"}
        rightImg={"/services_banner_right_image.png"}
      />

      {/* listing section */}
      <section className={` ${styles.careerListing}`}>
        <div className="container">
          <div className={styles.listMainWrap}>
            {listing.map((list, index) => {
              return (
                <div key={list.id} className={styles.listWrap}>
                  <Link href="/">
                    <figure className={styles.imgWrap}>
                      <Image
                        src={list.imgUrl}
                        alt={list.jobTitle}
                        width={400}
                        height={400}
                        className="img-fluid"
                      />
                    </figure>

                    <div className={styles.contWrap}>
                      <h3 className="subTitle ">{list.jobTitle}</h3>

                      <div className={styles.midWrap}>
                        <p className={styles.jobType}>
                          <BiTime />
                          {list.jobType}
                        </p>
                        <p className={styles.sal}>
                          <FaMoneyBillWave />
                          {list.salary}
                        </p>
                      </div>

                      <div className={styles.requirement}>
                        <p className={styles.listTitle}>
                          <strong>Requirement</strong>
                        </p>
                        <p className="desc"> {list.requirement}</p>
                      </div>

                      <div className={styles.description}>
                        <p className={styles.listTitle}>
                          <strong>Description</strong>
                        </p>
                        <p className="desc"> {list.description}</p>
                      </div>

                      <div className={styles.learnMore}>
                        <span href="/">Learn More</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
