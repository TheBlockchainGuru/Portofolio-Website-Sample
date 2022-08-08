import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillSkype
} from "react-icons/ai";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { CgMail } from 'react-icons/cg';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a senior blockchain developer with six years of experience in this field. 
            I research, develop and deploy with enthusiasm BTC, Etherium, Web3.js, peer-to-peer networks since 2016. 
            During five years in this field, 
            I became a technical expert with a strong understanding of my client's business goals.
              <br />
              <br />Through the completed many projects, I have developed expertise across the following sectors:
              <i><br /><br />
                <b className="purple"> • Multisignature Transaction </b> <br />
                <b className="purple"> • NFT marketplace </b><br />
                <b className="purple"> • Ecommerce </b><br />
                <b className="purple"> • Online gambling </b><br />
                <b className="purple"> • ICO </b><br />
                <b className="purple"> • Payment Gateway </b><br />
              </i>
              <br />
              <br />
              My key technologies to make this possible capability include: &nbsp;
              <i><br /><br />
                <b className="purple">• BTC, Ethereum, Solidity, Smart Contracts, Truffle, Web3js, Ganache, Metamask, Infura API. </b>
                {/* also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b> */}
              </i>
              {/* <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/cryptodev26"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <CgMail />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
