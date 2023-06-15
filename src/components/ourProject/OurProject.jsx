import Link from "next/link";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

import { useInView } from "react-intersection-observer";
import list from "./ProjectList.json";
import styles from "@/styles/Project.module.css";

// const OurProject = () => {
//   const [direction, setDirection] = useState("");
//   const [mouseDown, setMouseDown] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!direction) return;

//       const ratio = window.devicePixelRatio;

//       onResize(direction, e.movementX / ratio, e.movementY / ratio);
//     };

//     if (mouseDown) {
//       window.addEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [mouseDown, direction, onResize]);

//   useEffect(() => {
//     const handleMouseUp = () => setMouseDown(false);

//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   const handleMouseDown = (direction) => () => {
//     setDirection(direction);
//     setMouseDown(true);
//   };
//   return <div className="parentBound"></div>;
// };

const OurProject = () => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={styles.projectWrap}>
      <div className="container">
        <div className="row ">
          <div
            className={`col-lg-4 col-md-4 col-sm-12 col-xs-12 ${styles.leftWrapmain}`}
          >
            <div className={styles.leftWrap}>
              <h2 className="title">Our Projects</h2>
              <h6 className="subTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                quas!
              </h6>
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>

              <div className="buttonFill">
                <Link href="/">Learn More</Link>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-8 col-md-8 col-sm-12 col-xs-12 ${styles.rightWrap}`}
          >
            <div className={styles.listWrapMain}>
              {list.map((item, index) => {
                return (
                  <div key={item.id} className={styles.listWrap}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
