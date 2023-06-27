import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      const scroll = window.pageYOffset;
      scroll > 400 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  });

  const handelClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      title="Go to top"
      onClick={handelClick}
      className={visible ? "scrT" : "scrTN"}
    >
      <FaAngleUp />
    </button>
  );
};

export default ScrollTop;
