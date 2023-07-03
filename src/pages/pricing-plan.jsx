import SubBanner from "@/components/banner/SubBanner";
import SendRequest from "@/components/sendRequest/SendRequest";
import Calculator from "@/components/services/Calculator";
import VaCalculation from "@/components/vaCalculator/VaCalculation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import styles from "@/styles/PricingPage.module.css";

const PricingPlan = () => {
  return (
    <>
      <SubBanner
        firstTitle={""}
        lastTitle={"Prcing Plan"}
        desc={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, deleniti."
        }
        link={"Pricing"}
        rightImg={"/pricingplan_banner_right_image.png"}
      />

      {/* choose best plan  */}
      {/* <section className={`sectionGap ${styles.pricingChosePlan}`}>
        <div className="container">
          <div class="row text-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class={styles.pricingPlanContent}>
                <h6 className="title">PRICING PLAN</h6>
                <h2 className="subTitle">Choose The Best Plan To Get More</h2>
                <p className="desc">
                  Sonsectetur adipiscing elit sed do eiusmod tempor in labore et
                  dolore magna aliqua suarendisse ultrices gravida amet.
                </p>
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class={styles.pricingPlanImage}>
                <figure class="mb-0">
                  <Image
                    src="/pricing_plan_1.jpg"
                    alt="pricing plan"
                    class="img-fluid"
                    width={500}
                    height={500}
                  />
                </figure>
                <div class={styles.pricingPlanBox}>
                  <h4>Entrepreneur Plan</h4>
                  <ul class={styles.listUnstyled}>
                    <li>
                      <BsCheckCircleFill /> 12 Hours of task work
                    </li>
                    <li>
                      <BsCheckCircleFill /> 1 User included
                    </li>
                    <li>
                      <BsCheckCircleFill /> 1 Dedicated assistant
                    </li>
                    <li>
                      <BsCheckCircleFill /> Avialable M-F: 9am-6pm
                    </li>
                  </ul>
                  <div class="btn_wrapper">
                    <Link
                      class="text-decoration-none getstarted_btn"
                      href="./pricing_plan.html"
                    >
                      Get Started
                    </Link>
                  </div>
                  <figure class={`mb-0 ${styles.pricingPlanLogo}`}>
                    <Image
                      src="/pricing_plan_1_logo.png"
                      alt="pricing image"
                      width={100}
                      height={100}
                      class="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Calculator />
      <VaCalculation />
      <SendRequest />
    </>
  );
};

export default PricingPlan;
