import React, { useEffect, useState } from "react";
import styles from "@/styles/ServicePage.module.css";
import Image from "next/image";

const Calculator = () => {
  //   const resources= [
  //     { typeOfValue: 0, text: "Select" },
  //     { typeOfValue: 600, text: "Bookkeeping" },
  //     { typeOfValue: 600, text: "Business Development" },
  //     { typeOfValue: 91, text: "Sales Support" },
  //   ];

  const resources = [
    { typeOfValue: "", text: "Select" },
    { typeOfValue: "Book keeping", text: "Bookkeeping" },
    { typeOfValue: "Business Development", text: "Business Development" },
    { typeOfValue: "Customer Service ", text: "Customer Service " },
    { typeOfValue: "Digital Marketing ", text: "Digital Marketing " },
    { typeOfValue: "Graphic Design", text: "Graphic Design" },
    { typeOfValue: "HumanResources", text: "Human Resources" },
  ];

  //   const SkillLevel = [
  //     { skillValue: 0, text: "Select" },
  //     { skillValue: 3, text: "Beginner" },
  //     { skillValue: 4, text: "Intermediate" },
  //     { skillValue: 5, text: "Expert" },
  //     { skillValue: 4, text: "Pro" },
  //   ];

  const SkillLevel = [
    { skillValue: "", text: "Select" },
    { skillValue: "beginner", text: "Beginner" },
    { skillValue: "INntermediate", text: "Intermediate" },
    { skillValue: "Advance", text: "Advance" },
  ];

  const Role = [
    { roleValue: 0, text: "Select" },
    // { roleValue: 1, text: "Part Time" },
    { roleValue: 2, text: "Full Time" },
  ];
  const typeOfResourceOption = resources.map((option) => {
    return <option value={option.typeOfValue}>{option.text}</option>;
  });
  const skillLevelOption = SkillLevel.map((option) => {
    return <option value={option.skillValue}>{option.text}</option>;
  });
  const roleOption = Role.map((option) => {
    return <option value={option.roleValue}>{option.text}</option>;
  });

  const [resourceValue, setResourceValue] = useState("");
  console.log("Resourse from handel resource change", resourceValue);
  const [skillValue, setSkillValue] = useState("");

  console.log("SkillValue", skillValue);
  const [roleValue, setRoleValue] = useState("");
  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    handleCalculateCost();
  }, [skillValue, resourceValue]);
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

  const handleCalculateCost = (e) => {
    // e.preventDefault()
    console.log("Inside calculate", skillValue.toLowerCase().trim());
    console.log("Inside calculate resource", resourceValue);

    if (skillValue === "beginer" && resourceValue === "Bookkeeping") {
      setResourceValue(600);
    } else if (
      skillValue === "intermediate" &&
      resourceValue === "Bookkeeping"
    ) {
      setResourceValue(800);
    } else if (skillValue === "Advance" && resourceValue === "Bookkeeping") {
      setResourceValue(1000);
    } else {
      setResourceValue(0);
    }

    const resourcePrice = resourceValue || 0;
    const skillPrice = skillValue || 0;
    const rolePrice = roleValue || 0;
    const totalPrice = resourcePrice * skillPrice * rolePrice * number;
    setTotal(totalPrice);
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
                  onChange={(e) => setResourceValue(e.target.value)}
                  // onChange={(e) => setResourceValue(parseInt(e.target.value))}
                >
                  {typeOfResourceOption}
                </select>
              </div>
              <br />
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Skill Level</label>
                <select
                  className={`${styles.select}`}
                  value={skillValue}
                  //   onChange={(e) => setSkillValue(parseInt(e.target.value))}
                  onChange={(e) => setSkillValue(e.target.value)}
                >
                  {skillLevelOption}
                </select>
              </div>
              <br />
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Role</label>
                <select
                  className={`${styles.select}`}
                  value={roleValue}
                  onChange={(e) => setRoleValue(parseInt(e.target.value))}
                >
                  {roleOption}
                </select>
              </div>
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
