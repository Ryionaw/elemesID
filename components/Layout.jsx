import React from "react";
import Head from "next/head";
import { Button, Container, Col, Row } from "react-bootstrap";

import Navbars from "./Navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Elemes.id</title>
    </Head>
    <Container>
      <header>
        <Navbars />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Container>
  </>
);

export default Layout;
