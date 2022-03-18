import Image from "next/image";
import { Button, Container, Col, Row } from "react-bootstrap";
import image1 from "../assets/images/image1.png";

const Banner = ({ title1, title2, desc, button1, button2 }) => (
  <div className="bannerContainer">
    <h1 className="text primary">
      {title1}
      <br />
      {title2}
    </h1>
    <p className="text secondary">{desc}</p>
    <Button className="btn primary">{button1}</Button>
    <Button className="btn secondary">{button2}</Button>
  </div>
);

export default function Home() {
  return (
    <>
      <Container className="bgCustom" fluid>
        <Container className="section1">
          <Row className="d-flex customizedRow">
            <Col md={5}>
              <Banner
                title1="Good Food Us"
                title2="Good Mood"
                desc="I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy."
                button1="Daftar Sekarang"
                button2="About Us"
              />
            </Col>
            <Col className="d-flex justify-content-center" md={7}>
              <div className="imageWrapper">
                <Image className="customImg" src={image1} />
                <Row className="imageDesc">
                  <Col md={4} className="imageContainer centeredAll">
                    <Image
                      width={53}
                      height={53}
                      className="smallImg"
                      src={image1}
                    />
                  </Col>
                  <Col md={8} className="descContainer centeredAll">
                    Green Salad Tomato <br />
                    Tomato <br />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col md={12}>
            <h1 className="text secondary">Browse Our Category</h1>
            <h1 className="text primary">Receipt</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
