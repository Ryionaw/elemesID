import Image from "next/image";
import { Button, Container, Col, Row } from "react-bootstrap";
import image1 from "../assets/images/image1.png";

import StarRating from "../components/StarRating";
import Swiper from "../components/swiper";
import Receipt from "../components/Receipt";

const Banner = ({ title1, title2, desc, button1, button2 }) => (
  <div className="bannerContainer">
    <h1 className="text primary">
      {title1}
      <br />
      {title2}
    </h1>
    <p className="text secondary">{desc}</p>
    <Button className="btn buttonized primary">{button1}</Button>
    <Button className="btn buttonized secondary">{button2}</Button>
  </div>
);

export default function Home() {
  return (
    <>
      <Container className="bgCustom" fluid>
        <Container className="section1 pt-5">
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
                <Image className="customImg" src={image1} alt="mainBannerImg" />
                <Row className="imageDesc">
                  <Col md={3} className="imageContainer centeredAll">
                    <Image
                      width={53}
                      height={53}
                      className="smallImg"
                      src={image1}
                      alt="smallBannerImg"
                    />
                  </Col>
                  <Col md={9} className="descContainer centeredAll">
                    <p>Green Salad Tomato</p>
                    <p>Tomato</p>
                    <div className="starContainer">
                      <StarRating star="4" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md={12}>
            <h1 className="text secondary">Browse Our Category</h1>
            <h1 className="text primary">Receipt</h1>
          </Col>
          <div className="categories">
            <Swiper />
          </div>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <Col md={12}>
            <h1 className="text secondary">Browse Our Trending</h1>
            <h1 className="text primary">Receipt</h1>
          </Col>
          <Col md={12}>
            <div className="trendingFoods">
              <Row className="receipt">
                <Receipt
                  title="Pizza Paperoni"
                  desc="Pizza"
                  stars="4"
                  background="greenish"
                  item="pizzapaperoni"
                />
                <Receipt
                  title="Pizza Meat"
                  desc="Pizza"
                  stars="3"
                  background="blueish"
                  item="pizzameat"
                />
                <Receipt
                  title="Donner Kebab"
                  desc="Kebab"
                  stars="5"
                  background="purplish"
                  item="donerkebab"
                />
                <Receipt
                  title="Salmon Roll"
                  desc="Salmon"
                  stars="4"
                  background="pinky"
                  item="salmonroll"
                />
                <Receipt
                  title="Cupcake Choco"
                  desc="Cupcake"
                  stars="4"
                  background="greenish"
                  item="cupcakechocho"
                />
                <Receipt
                  title="Doughnut Milk"
                  desc="Doughnut"
                  stars="5"
                  background="yellowish"
                  item="doughnutmilk"
                />
                <Receipt
                  title="Doughnut Unicorn"
                  desc="Doughnut"
                  stars="4"
                  background="yellowish"
                  item="doughnutpink"
                />
                <Receipt
                  title="Kathi Kebab"
                  desc="Kebab"
                  stars="4"
                  background="purplish"
                  item="kathikebab"
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
