import Image from "next/image";
import { Link } from "next/link";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
import brandLogo from "../assets/images/elemes.png";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => (
  <Container className="footerContainer">
    <Row>
      <Col md={4}>
        <Image src={brandLogo} width={207} height={50} alt="logo" />
        <p>
          Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
          Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
        </p>
        <div className="socmedContainer"></div>
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
      <Col md={4}>
        <h3>Newsletter</h3>
        <br />
        Get now free 50% discount for alll products on your first order
        <Form.Control
          type="email"
          id="inputEmail"
          aria-describedby="emailHelpBlock"
          placeholder="Your email address"
        />
        <br />
        <HiOutlineMail style={{ color: "#8BAC3E" }} /> elemesid@gmail.com <br />
        <FiPhone style={{ color: "#8BAC3E" }} /> 0888&nbsp;1111&nbsp;2222
      </Col>
    </Row>
  </Container>
);

export default Navbar;
