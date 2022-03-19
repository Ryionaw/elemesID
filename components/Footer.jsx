import Image from "next/image";
import { Link } from "next/link";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
import brandLogo from "../assets/images/elemes.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram, AiOutlineMenu } from "react-icons/ai";
import MediaQuery from "react-responsive";

const Navbar = () => (
  <>
    <MediaQuery minDeviceWidth={768}>
      <Container>
        <Row className="footerContainer">
          <Col md={5}>
            <Image src={brandLogo} width={207} height={50} alt="logo" />
            <p className="mt-3">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>
            <div className="socmedContainer">
              <a
                href="elemesid@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <HiOutlineMail />
              </a>
              <a
                href="+62 823-6307-1285"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiPhone />
              </a>
              <a
                href="https://www.instagram.com/elemes.id/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </Col>
          <Col md={2}>
            <h3>Categories</h3>
            <br />
            <p>Cupcake</p>
            <p>Pizza</p>
            <p>Kebab</p>
            <p>Salmon</p>
            <p>Doughnut</p>
          </Col>
          <Col md={2}>
            <h3>About Us</h3>
            <br />
            <p>About Us</p>
            <p>FAQ</p>
            <p>Report Problem</p>
          </Col>
          <Col md={3}>
            <h3>Newsletter</h3>
            <br />
            Get now free 50% discount for alll products on your first order
            <div className="emailWrapper">
              <Form.Control
                type="email"
                className="mt-3"
                id="inputEmail"
                aria-describedby="emailHelpBlock"
                placeholder="Your email address"
              />
              <Button className="sendButton">Send</Button>
            </div>
            <br />
            <HiOutlineMail
              style={{ color: "#8BAC3E" }}
            /> elemesid@gmail.com <br />
            <FiPhone style={{ color: "#8BAC3E" }} /> 0888&nbsp;1111&nbsp;2222
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center mt-5">
            <p>© 2021 Elemes id. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={768}>
      <Container className="mobileMenu">
        <Row>
          <Col className="text-center noMargPadd">
            <AiOutlineMenu />
            <br />
            Home
          </Col>
          <Col className="text-center noMargPadd">
            <AiOutlineMenu />
            <br />
            Promotions
          </Col>
          <Col className="text-center noMargPadd">
            <AiOutlineMenu />
            <br />
            Others
          </Col>
        </Row>
      </Container>
    </MediaQuery>
  </>
);

export default Navbar;
