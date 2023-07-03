import React, { useEffect, useState } from "react";
import styles from "@/styles/ServicePage.module.css";
import Image from "next/image";

const Calculator = () => {
  const [bookkeeping, setBookkeeping] = useState(["600", "800", "1000"]);
  const [businessDevelopment, setBusinessDevelopment] = useState([
    "600",
    "100",
    "1600",
  ]);
  const [customerService, setCustomerService] = useState(["500", "650", "800"]);

  // const [resourceValue, setResourceValue] = useState("");
  const [resVal, setResVal] = useState("");
  // const [skillValue, setSkillValue] = useState("");

  const [fieldVal, setFieldVal] = useState({
    resourceValue: "",
    skillValue: "",
  });

  console.log("Fields value", fieldVal);

  // console.log("Type of Resource", resourceValue);
  // console.log("Skill Level", skillValue);
  console.log("REsource allocate value", resVal);

  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(0);

  const handelResourceChange = (e) => {
    e.preventDefault();
    setFieldVal({ ...fieldVal, [e.target.name]: e.target.value });

    if (fieldVal.resourceValue === "Bookkeeping") {
      if (fieldVal.skillValue === "Beginner") {
        setResVal(600);
      } else if (fieldVal.skillValue === "Intermediate") {
        setResVal(800);
      } else if (fieldVal.skillValue === "Advanced") {
        setResVal(1000);
      } else {
        setResVal(0);
      }
    }

    if (fieldVal.resourceValue === "Business Development") {
      if (fieldVal.skillValue === "Beginner") {
        setResVal(600);
      } else if (fieldVal.skillValue === "Intermediate") {
        setResVal(1000);
      } else if (fieldVal.skillValue === "Advanced") {
        setResVal(1600);
      } else {
        setResVal(0);
      }
    }

    if (fieldVal.resourceValue === "Customer Service") {
      if (fieldVal.skillValue === "Beginner") {
        setResVal(500);
      } else if (fieldVal.skillValue === "Intermediate") {
        setResVal(650);
      } else if (fieldVal.skillValue === "Advanced") {
        setResVal(800);
      } else {
        setResVal(0);
      }
    }
  };

  const handelSkillChange = (value) => {
    console.log("handelSkillChange", value);
    setSkillValue(value);

    if (value != "" && resourceValue === "Bookkeeping") {
      if (value === "Beginner") {
        setResVal(600);
      } else if (value === "Intermediate") {
        setResVal(800);
      } else if (value === "Advanced") {
        setResVal(1000);
      } else {
        setResVal(0);
      }
    }

    if (value != "" && resourceValue === "Business Development") {
      if (value === "Beginner") {
        setResVal(600);
      } else if (value === "Intermediate") {
        setResVal(1000);
      } else if (value === "Advanced") {
        setResVal(1600);
      } else {
        setResVal(0);
      }
    }

    if (value != "" && resourceValue === "Customer Service") {
      if (value === "Beginner") {
        setResVal(500);
      } else if (value === "Intermediate") {
        setResVal(650);
      } else if (value === "Advanced") {
        setResVal(800);
      } else {
        setResVal(0);
      }
    }
  };

  useEffect(() => {
    handleCalculateCost();
  }, [fieldVal.resourceValue, fieldVal.skillValue, number]);

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

  const handelresourceChange = (e) => {
    // e.preventDefault();
    setResourceValue(e.target.value);
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
                  value={fieldVal.resourceValue}
                  name="resourceValue"
                  id="resourceValue"
                  onChange={handelResourceChange}
                  // onChange={(e) => setFieldVal.resourceValue(e.target.value)}
                  // onChange={(e) => handelResourceChange(e.target.value)}
                >
                  <option value="">-- Please Select --</option>
                  <option value="Bookkeeping">Bookkeeping</option>
                  <option value="Business Development">
                    Business Development
                  </option>
                  <option value="Customer Service">Customer Service </option>
                </select>
              </div>
              <br />

              <div className={styles.fieldWrap}>
                <label className={styles.label}>Skill Level</label>
                <select
                  className={`${styles.select}`}
                  value={fieldVal.skillValue}
                  name="skillValue"
                  id="skillValue"
                  onChange={handelResourceChange}
                  // onChange={(e) => handelSkillChange(e.target.value)}
                >
                  <option value="">-- Please Select --</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <br />

              {/* <div className={styles.fieldWrap}>
                <label className={styles.label}>Role</label>
                <select
                  className={`${styles.select}`}
                  value={roleValue}
                  onChange={(e) => setRoleValue(parseInt(e.target.value))}
                >
                  {roleOption}
                </select>
              </div> */}
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
