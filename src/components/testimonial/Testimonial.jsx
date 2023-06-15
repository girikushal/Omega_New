import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import styles from "@/styles/Testimonial.module.css";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className={`sectionGap ${styles.testiWrap}`}>
      <div className="container">
        <h2 className="title text-center ">Testimonial</h2>
        <p className="subTitle text-center mb-5">What Our Clients are Saying</p>
        <Carousel
          interval={3000}
          controls={false}
          className={styles.testiCarouselWrap}
          fade={true}
          indicators={false}
        >
          <Carousel.Item className={styles.carouselItem}>
            <div className={styles.carasolImgWrap}>
              <BsFillChatSquareQuoteFill />
            </div>
            <Carousel.Caption className={styles.carouselCaption}>
              <p className="desc">
                We have been able to save on operational costs while maintaining
                high-quality recruitment functions by outsourcing to talented
                professionals recommended by Omega BPO. We are thrilled with the
                results we've seen so far and look forward to a long-lasting
                partnership with Omega BPO.
              </p>

              <span className="desc mt-4">
                <span
                  style={{ color: "var(--primary-orange)", display: "block" }}
                >
                  Jenish
                </span>
                Director, A Health and Social Care Recruitment Company based in
                the UK
              </span>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
