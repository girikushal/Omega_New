import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsHeadphones,
} from "react-icons/bs";

const Header = () => {
  const [show, setShow] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  // };

  // useEffect(() => {
  //   let backgroundTransparacyVar = clientWindowHeight / 10;

  //   if (backgroundTransparacyVar < 1) {
  //     let paddingVar = 2 - backgroundTransparacyVar * 20;
  //     let boxShadowVar = backgroundTransparacyVar * 0.1;
  //     setBackgroundTransparacy(backgroundTransparacyVar);
  //     setPadding(paddingVar);
  //     setBoxShadow(boxShadowVar);
  //   }
  // }, [clientWindowHeight]);

  return (
    <div
      className={styles.headWrap}
      style={
        {
          // background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
          // padding: `${padding}px 20px`,
          // boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }
      }
    >
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand className={styles.logo}>
              {/* OMEGA<span>BPO</span> */}
              <Image
                src="/obpoLogo.webp"
                alt="omegaLogo"
                width={80}
                height={80}
                priority={true}
                className="img-fluid"
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={styles.toggleBtn}
          />

          <Navbar.Collapse id="responsive-navbar-nav" className={styles.inNav}>
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>

              <Link href="/services" passHref legacyBehavior>
                <Nav.Link>Services</Nav.Link>
              </Link>

              <Link href="/about-us" passHref legacyBehavior>
                <Nav.Link>About Us</Nav.Link>
              </Link>

              <Link href="/careers" passHref legacyBehavior>
                <Nav.Link>Career</Nav.Link>
              </Link>

              <Link href="/pricing-plan" passHref legacyBehavior>
                <Nav.Link>Pricing Plan</Nav.Link>
              </Link>

              {/* <NavDropdown
                title="Services"
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className="navDrop"
              >
                <div className="dropMenuWrap">
                  <Link
                    href="/services/talentsolutions"
                    passHref
                    legacyBehavior
                  >
                    <NavDropdown.Item>Our Talent Solutions</NavDropdown.Item>
                  </Link>
                  <Link
                    href="/services/outsourcingtalents"
                    passHref
                    legacyBehavior
                  >
                    <NavDropdown.Item>Outsourcing Talent</NavDropdown.Item>
                  </Link>
                </div>
              </NavDropdown> */}
              <Link href="/contact-us" passHref legacyBehavior>
                <Nav.Link>Contact Us</Nav.Link>
              </Link>
            </Nav>

            <div className={styles.headContactWrap}>
              <Link href="tel: +44-(0) 2033369265" passHref legacyBehavior>
                <Nav.Link className={styles.contactNum}>
                  <BsHeadphones /> +44-(0) 2033369262 (UK)
                </Nav.Link>
              </Link>

              <ul className={styles.socialLinks}>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/OmegaOutsourcingPvtltd?mibextid=LQQJ4d"
                >
                  <li>
                    <BsFacebook />
                  </li>
                </Link>

                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHHu-xbZEC-mQAAAYhS5hNwSkTnSabgkcC3fHqoxrQFqIp5LnrSJri5CsB9vayUHqMpArJvusgr3CPjRiwFmf-gw7g7NdEqVf8FxS4BFEjtGp970AtikNlmQSsCAikAgqYJOak=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fomega-bpo%2F"
                >
                  <li>
                    <BsLinkedin />
                  </li>
                </Link>

                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/omegabpo/"
                >
                  <li>
                    <BsInstagram />
                  </li>
                </Link>

                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/OmegaBPO"
                >
                  <li>
                    <BsTwitter />
                  </li>
                </Link>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
