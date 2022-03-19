import Image from "next/image";
import { Link } from "next/link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import elemes from "../assets/images/elemes.png";

const Navigation = () => (
  <Navbar
    collapseOnSelect
    //   fixed="top"
    expand="sm"
  >
    <Container className="navbarContainer">
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      <Navbar.Brand href="/home">
        <Image src={elemes} alt="logo" />
      </Navbar.Brand>
      <Nav.Link href="/signup" className="onMobile">
        <Button className="btn buttonized primary">Daftar Sekarang</Button>
      </Nav.Link>

      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/home">
            Home
            {/* <span className="hotSpan">Hot</span> */}
          </Nav.Link>
          <Nav.Link href="/about">
            About
            {/* <span className="hotSpan">Hot</span> */}
          </Nav.Link>
          <Nav.Link href="/promotions">
            Promotions
            <span className="hotSpan">Hot</span>
          </Nav.Link>
          <Nav.Link href="/blogs">
            Blogs
            {/* <span className="hotSpan">Hot</span> */}
          </Nav.Link>
          <Nav.Link href="/contact">
            Contact Us
            {/* <span className="hotSpan">Hot</span> */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="align-center">
          <Nav.Link href="/login">Masuk</Nav.Link>
          <Nav.Link href="/signup">
            <Button className="btn buttonized primary">Daftar Sekarang</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
