import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillSkype
} from "react-icons/ai";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { CgMail } from 'react-icons/cg';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Yamashita Zenko</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} YZ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/cryptodev26"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://discord.com/"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noreferrer"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noreferrer"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noreferrer"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noreferrer"
                >
                  <CgMail />
                </a>
              </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
