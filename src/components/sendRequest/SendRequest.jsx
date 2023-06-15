import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage, textArea } from "formik";
import Image from "next/image";
import HoverFlip from "../hoverFlip/HoverFlip";
import React, { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const SendRequest = () => {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
  });

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <div className={` sectionGap sendReqWrap ${styles.sendReqWrap}`}>
      <div ref={setRefs} className="container">
        <div className="row">
          <div
            className={`col-lg-4 col-md-4 col-sm-12 col-xs-12 ${
              inView && "animationTop"
            }`}
          >
            <HoverFlip
              frontSide={
                <>
                  <h2 className="subTitle">Ready to Get Started ?</h2>

                  <hr />
                  <div className={styles.contactInfo}>
                    <span className={styles.callIcon}>
                      <BsFillTelephoneFill />
                    </span>
                    <Link href="tel:+44-(0) 2033369265">
                      +44-(0) 2033369265 (UK)
                    </Link>
                  </div>
                </>
              }
              backSide={
                <>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus animi inventore iure cum corporis rem maxime
                    accusamus et. Ea, illo?
                  </p>
                  <hr />
                  <div className="buttonFill">
                    <Link href="https://calendly.com/yourvaappointments/45minfreeconsultation">
                      Contact Us
                    </Link>
                  </div>
                </>
              }
            />
          </div>

          <div
            className={`col-lg-8 col-md-8 col-sm-12 col-xs-12 ${
              inView && "animationRight"
            }`}
          >
            <div className={styles.formWrap}>
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  phone: "",
                  company: "",
                  message: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.fullname) {
                    errors.fullname = "Name is required";
                  }

                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }

                  if (!values.phone) {
                    errors.phone = "Phone is required";
                  }
                  if (!values.company) {
                    errors.company = "Company Name is required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ handleSubmit, values, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className={styles.inputWrap}>
                      <Field
                        type="text"
                        name="fullname"
                        placeholder="Fullname"
                      />
                      <ErrorMessage name="fullname" component="span" />
                    </div>
                    <div className={styles.inputWrap}>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                      <ErrorMessage name="email" component="span" />
                    </div>
                    <div className={styles.inputWrap}>
                      <Field
                        type="phone"
                        name="phone"
                        placeholder="Phone no."
                      />
                      <ErrorMessage name="phone" component="span" />
                    </div>

                    <div className={styles.inputWrap}>
                      <Field
                        type="text"
                        name="company"
                        placeholder="Company Name"
                      />
                      <ErrorMessage name="company" component="span" />
                    </div>
                    <div className={styles.inputWrap}>
                      <textArea
                        type="textarea"
                        name="Message"
                        placeholder="Enter Message"
                      />
                    </div>
                    <div className={styles.buttonWrap}>
                      <button
                        className="buttonFill"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <figure className={`${styles.backImg} ${inView && "animationLeft"}`}>
        <Image
          src="/send_message_left_icon.png"
          alt="send message icon"
          width={200}
          height={200}
          className="img-fluid"
        />
      </figure>

      <figure className={styles.backImg2}>
        <Image
          src="/send_message_right_icon.png"
          alt="send message icon"
          width={200}
          height={200}
          className="img-fluid"
        />
      </figure>

      <figure className={styles.backImg3}>
        <Image
          src="/send_message_bottom_icon.png"
          alt="send message icon"
          width={200}
          height={200}
          className="img-fluid"
        />
      </figure>
    </div>
  );
};

export default SendRequest;
