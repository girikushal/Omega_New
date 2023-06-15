import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "@/styles/PdfDownload.module.css";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function MyVerticallyCenteredModal(props) {
  //   console.log("modal", props);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      //   console.log("Submit button click data", JSON.stringify(values, null, 2));

      window.open("/bookConsultation.pdf", "_ blank");
      resetForm({ values: "" });
      props.onHide(false);
    },
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form className={styles.popForm} onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span>{formik.errors.email}</span>
            )}

            {/* <div className="buttonFill"> */}
            <button className="buttonFill" type="submit">
              Submit
            </button>
            {/* </div> */}
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

const PdfDownload = () => {
  const [showPop, setShowPop] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      //   console.log("Page is loaded and pop after 5 sec");
      setShowPop(true);
    };

    if (document.readyState === "complete") {
      setTimeout(function () {
        onPageLoad();
      }, 5000);
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {showPop && (
        <div className={styles.ButtonWrap}>
          <button className={styles.closeBtn} onClick={() => setShowPop(false)}>
            X
          </button>

          <Button className={styles.playBtn} onClick={() => setModalShow(true)}>
            <div className="popWrap">
              <Image
                src="/operator.png"
                alt="download pdf"
                width={100}
                height={100}
                className="img-fluid"
              />
            </div>
          </Button>
        </div>
      )}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default PdfDownload;
