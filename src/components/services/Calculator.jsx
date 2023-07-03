import React, { useEffect, useState } from "react";
import styles from "@/styles/ServicePage.module.css";
import Image from "next/image";
import Link from "next/link";

const Calculator = () => {
  const [bookkeeping, setBookkeeping] = useState(["600", "800", "1000"]);
  const [businessDevelopment, setBusinessDevelopment] = useState([
    "600",
    "100",
    "1600",
  ]);
  const [customerService, setCustomerService] = useState(["500", "650", "800"]);

  const [resourceValue, setResourceValue] = useState("");
  const [resVal, setResVal] = useState("");
  const [skillValue, setSkillValue] = useState("");

  const [fieldVal, setFieldVal] = useState({
    resourceValue: "",
    skillValue: "",
  });

  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("useEffect", fieldVal);
    console.log("useEffect res", resVal);
    handelResourceLabel();
    handleCalculateCost();
  }, [resourceValue, skillValue, resVal, number]);

  const handelResourceLabel = () => {
    if (resourceValue === "Bookkeeping" && skillValue === "Beginner") {
      return setResVal(600);
    } else if (
      resourceValue === "Bookkeeping" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(800);
    } else if (resourceValue === "Bookkeeping" && skillValue === "Advanced") {
      return setResVal(1000);
    }

    if (resourceValue === "Business Development" && skillValue === "Beginner") {
      return setResVal(600);
    } else if (
      resourceValue === "Business Development" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(1000);
    } else if (
      resourceValue === "Business Development" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1600);
    }

    if (resourceValue === "Customer Service" && skillValue === "Beginner") {
      return setResVal(500);
    } else if (
      resourceValue === "Customer Service" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(650);
    } else if (
      resourceValue === "Customer Service" &&
      skillValue === "Advanced"
    ) {
      return setResVal(800);
    }

    if (resourceValue === "Digital Marketing" && skillValue === "Beginner") {
      return setResVal(600);
    } else if (
      resourceValue === "Digital Marketing" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(800);
    } else if (
      resourceValue === "Digital Marketing" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1200);
    }

    if (resourceValue === "Graphic Design" && skillValue === "Beginner") {
      return setResVal(600);
    } else if (
      resourceValue === "Graphic Design" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(900);
    } else if (
      resourceValue === "Graphic Design" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1200);
    }

    if (resourceValue === "Human Resources" && skillValue === "Beginner") {
      return setResVal(600);
    } else if (
      resourceValue === "Human Resources" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(800);
    } else if (
      resourceValue === "Human Resources" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1200);
    }

    if (resourceValue === "IT Support" && skillValue === "Beginner") {
      return setResVal(600);
    } else if (
      resourceValue === "IT Support" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(900);
    } else if (resourceValue === "IT Support" && skillValue === "Advanced") {
      return setResVal(1300);
    }

    if (resourceValue === "Personal Assistant" && skillValue === "Beginner") {
      return setResVal(700);
    } else if (
      resourceValue === "Personal Assistant" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(900);
    } else if (
      resourceValue === "Personal Assistant" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1200);
    }

    if (
      resourceValue === "Recruitment Consultant" &&
      skillValue === "Beginner"
    ) {
      return setResVal(600);
    } else if (
      resourceValue === "Recruitment Consultant" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(800);
    } else if (
      resourceValue === "Recruitment Consultant" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1000);
    }

    if (resourceValue === "SEO" && skillValue === "Beginner") {
      return setResVal(700);
    } else if (resourceValue === "SEO" && skillValue === "Intermediate") {
      return setResVal(800);
    } else if (resourceValue === "SEO" && skillValue === "Advanced") {
      return setResVal(1100);
    }

    if (
      resourceValue === "Social Media Marketing" &&
      skillValue === "Beginner"
    ) {
      return setResVal(600);
    } else if (
      resourceValue === "Social Media Marketing" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(800);
    } else if (
      resourceValue === "Social Media Marketing" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1100);
    }

    if (resourceValue === "Software Development" && skillValue === "Beginner") {
      return setResVal(700);
    } else if (
      resourceValue === "Software Development" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(1000);
    } else if (
      resourceValue === "Software Development" &&
      skillValue === "Advanced"
    ) {
      return setResVal(1400);
    }

    if (resourceValue === "Telesales" && skillValue === "Beginner") {
      return setResVal(700);
    } else if (resourceValue === "Telesales" && skillValue === "Intermediate") {
      return setResVal(900);
    } else if (resourceValue === "Telesales" && skillValue === "Advanced") {
      return setResVal(1200);
    }

    if (resourceValue === "Video Editing" && skillValue === "Beginner") {
      return setResVal(700);
    } else if (
      resourceValue === "Video Editing" &&
      skillValue === "Intermediate"
    ) {
      return setResVal(900);
    } else if (resourceValue === "Video Editing" && skillValue === "Advanced") {
      return setResVal(1200);
    }
  };

  const handleCalculateCost = () => {
    const totalPrice = resVal * number;
    setTotal(totalPrice);
  };

  const increment = (e) => {
    e.preventDefault();
    if (number < 15) {
      setNumber(number + 1);
    }
  };
  const decrement = (e) => {
    e.preventDefault();
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  return (
    <>
      <div className="container wrapper">
        <div className={styles.calcTop}>
          <p className="desc text-center">
            At OMEGA BPO, we offer flexible pricing packages to suit businesses
            of all sizes. Our packages are designed to provide excellent value
            for your investment while ensuring that you receive the assistance
            you need. Check our Outsourcing Resource Calculator to hire a
            Virtual Assistant.
          </p>
        </div>

        <div className={styles.calcWrap}>
          <div className={styles.calcLeft}>
            <Image
              src="/calcBAck.jpg"
              alt="calcBAck"
              width={300}
              height={300}
            />
          </div>

          <div className={styles.calcRight}>
            <h1 className={`${styles.headingContent}`}>
              {" "}
              Calculate the cost of hiring remote employees{" "}
            </h1>

            <form className={`${styles.formTopic}`}>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Type of Resource</label>
                <select
                  className={`${styles.select}`}
                  value={resourceValue}
                  name="resourceValue"
                  id="resourceValue"
                  onChange={(e) => setResourceValue(e.target.value)}
                >
                  <option value="">-- Please Select --</option>
                  <option value="Bookkeeping">Bookkeeping</option>
                  <option value="Business Development">
                    Business Development
                  </option>
                  <option value="Customer Service">Customer Service </option>
                  <option value="Digital Marketing">Digital Marketing </option>
                  <option value="Graphic Design">Graphic Design </option>
                  <option value="Human Resources">Human Resources </option>
                  <option value="IT Support">IT Support </option>
                  <option value="Personal Assistant">
                    Personal Assistant{" "}
                  </option>
                  <option value="Recruitment Consultant">
                    Recruitment Consultant{" "}
                  </option>
                  <option value="SEO">SEO </option>
                  <option value="Social Media Marketing">
                    Social Media Marketing{" "}
                  </option>
                  <option value="Software Development">
                    Software Development{" "}
                  </option>
                  <option value="Telesales">Telesales </option>
                  <option value="Video Editing">Video Editing </option>
                </select>
              </div>
              <br />

              <div className={styles.fieldWrap}>
                <label className={styles.label}>Skill Level</label>
                <select
                  className={`${styles.select}`}
                  value={skillValue}
                  name="skillValue"
                  id="skillValue"
                  onChange={(e) => setSkillValue(e.target.value)}
                >
                  <option value="">-- Please Select --</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <br />

              <br />

              <div className={styles.fieldWrap}>
                <label className={styles.label}>Number of resource</label>
                <span className={`${styles.select}`}>
                  <button onClick={decrement}>
                    <p>-</p>
                  </button>
                  <span value={number} className="px-3" onChange={handleChange}>
                    {number}
                  </span>
                  <button onClick={increment}>
                    <p>+</p>
                  </button>
                </span>
              </div>
              <br />
              <div className={styles.result}>
                <span className={styles.total}>Total </span>
                <span className={styles.resultValue}>£ {total}</span>
              </div>
              {/* <div>
                <button onClick={handleCalculateCost}>Total </button>
              </div> */}

              <div className="ctaSection">
                <p className="desc">
                  Can't find the perfect fit? Let us know your specific needs,
                  and we'll provide a tailored quote just for you.
                </p>
                <div className="buttonFill">
                  <Link href="/">Send a Quote</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
